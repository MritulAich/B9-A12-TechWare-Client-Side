import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image_url = form.image_url.value;
        const description = form.description.value;
        const tagsList = form.tags.value;
        const external_link = form.external_link.value;
        const owner = form.owner.value;
        const owner_email = form.owner_email.value;
        const owner_img = form.owner_img.value;

        const tags = tagsList.split(',').map(tag => tag.trim());
        const _id = new Date().getTime().toString();

        const newProduct = {
            _id, name, image_url, description, tags, external_link, owner, owner_email, owner_img,
            timestamp: new Date()
        }
        console.log(newProduct);

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'New Product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })

        axiosSecure.post('/myProducts', newProduct)

        event.target.reset();
        navigate('/dashboard/myProducts')
    }

    return (
        <div className="ml-8">
            <h1 className=' text-2xl font-medium underline mb-8'>Add a product</h1>

            <form onSubmit={handleAddProduct}>
                <div className="flex lg:flex-row md:flex-row flex-col gap-8">
                    <div className="">
                        <p>Product Name :</p>
                        <input type="text" name="name" className="input input-bordered mb-3" required />
                        <p>Product Image :</p>
                        <input type="url" name="image_url" placeholder="type url" className="input mb-3 input-bordered w-56" required /><br />
                        <p>Description :</p>
                        <input type="text" name="description" className="input input-bordered mb-3" required />
                        <p>Tags :</p>
                        <input type="text" name="tags" placeholder="Ex: Web App, Productivity, Task Management" className="input input-bordered mb-3" />
                    </div>

                    <div className="">
                        <p>External Links :</p>
                        <input type="url" name="external_link" className="input input-bordered mb-3" />
                        <p>Owner name :</p>
                        <input type="text" name="owner" disabled defaultValue={user.displayName} className="input input-bordered mb-3" required />
                        <p>Owner email :</p>
                        <input type="email" name="owner_email" disabled defaultValue={user.email} className="input input-bordered mb-3" required />
                        <p>Owner img :</p>
                        <input type="url" name="owner_img" disabled defaultValue={user.photoURL} className="input mb-3 input-bordered" required />
                    </div>
                </div>

                <div>
                    <button className="btn btn-accent w-52 lg:w-96 md:w-96 mt-6 text-lg">Submit</button>
                </div>
            </form>
            <Helmet>
                <title>User | Add Products</title>
            </Helmet>
        </div>
    );
};

export default AddProduct;