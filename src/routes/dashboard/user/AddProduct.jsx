import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";

const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const product = form.product.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const tags = form.tags.value;
        const links = form.links.value;
        const name = form.name.value;
        const email = form.email.value;
        const img = form.img.value;

        const newProduct = {
            photo, product, description, tags, links, img, name, email,
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
                        <input type="text" name="product" className="input input-bordered mb-3" required/>
                        <p>Product Image :</p>
                        <input type="url" name="photo" placeholder="type url" className="input mb-3 input-bordered w-56" required/><br />
                        <p>Description :</p>
                        <input type="text" name="description" className="input input-bordered mb-3" required/>
                        <p>Tags :</p>
                        <input type="text" name="tags" className="input input-bordered mb-3" />
                    </div>

                    <div className="">
                        <p>External Links :</p>
                        <input type="url" name="links" className="input input-bordered mb-3" />
                        <p>Owner name :</p>
                        <input type="text" name="name" disabled defaultValue={user.displayName} className="input input-bordered mb-3" required/>
                        <p>Owner email :</p>
                        <input type="email" name="email" disabled defaultValue={user.email} className="input input-bordered mb-3" required/>
                        <p>Owner img :</p>
                        <input type="url" name="img" disabled defaultValue={user.photoURL} className="input mb-3 input-bordered" required/>
                    </div>
                </div>

                <div>
                    <button className="btn btn-accent w-52 lg:w-96 md:w-96 mt-6 text-lg">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;