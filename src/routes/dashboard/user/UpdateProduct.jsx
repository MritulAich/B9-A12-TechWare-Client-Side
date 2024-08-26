import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const { id } = useParams();
    const product = useLoaderData();

    const handleUpdateProduct = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image_url = form.image_url.value;
        const description = form.description.value;
        const tags = form.tags.value;
        const external_link = form.external_link.value;

        const updatedProduct = { name, image_url, description, tags, external_link };

        try {
            const response = await fetch(`http://localhost:5000/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedProduct)
            });

            const data = await response.json();
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success',
                    text: 'Product updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                });
                form.reset();
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2 className="text-xl text-center">Update your product</h2>

            <form onSubmit={handleUpdateProduct}>
                <div className="flex flex-col gap-6">
                    <p>Product Name :</p>
                    <input type="text" name="name" defaultValue={product.name} className="input input-bordered mb-3" required />
                    <p>Product Image :</p>
                    <input type="url" name="image_url" defaultValue={product.image_url} placeholder="type url" className="input mb-3 input-bordered w-56" required /><br />
                    <p>Description :</p>
                    <input type="text" name="description" defaultValue={product.description} className="input input-bordered mb-3" required />
                    <p>Tags :</p>
                    <input type="text" name="tags" defaultValue={product.tags} placeholder="Ex: Web App, Productivity, Task Management" className="input input-bordered mb-3" />
                    <p>External Links :</p>
                    <input type="url" name="external_link" defaultValue={product.external_link} className="input input-bordered mb-3" />
                </div>

                <div>
                    <button className="btn btn-accent w-52 lg:w-96 md:w-96 mt-6 text-lg">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;
