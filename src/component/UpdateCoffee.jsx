import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, supplier, category, chef, taste, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, supplier, category, chef, taste, details, photo };
        // console.log(data);

        fetch(`https://coffee-store-server-jet-one.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }


    return (
        <div className="mt-28 bg-[#F4F3F0] w-1/2 border mx-auto py-10">
            <h4 className="text-center mb-2 text-2xl font-bold">Update Coffee:{name}</h4>
            <p className="w-2/3 text-center mx-auto text-sm">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

            <form onSubmit={handleUpdateCoffee}>
                <div className="flex gap-6 justify-center py-6 w-[80%] mx-auto">
                    <div className="space-y-2 w-1/2">
                        <label className="flex flex-col" htmlFor="name">Name:
                            <input type="text" name="name" placeholder={name} className="input input-bordered w-full " id="name" />
                        </label>
                        <label className="flex flex-col" htmlFor="supplier">Supplier:
                            <input type="text" name="supplier" placeholder={supplier} className="input input-bordered w-full" id="supplier" />
                        </label>
                        <label className="flex flex-col" htmlFor="category">Category:
                            <input type="text" name="category" placeholder={category} className="input input-bordered w-full" id="category" />
                        </label>
                    </div>
                    <div className="space-y-2 w-1/2">
                        <label className="flex flex-col" htmlFor="chef">Chef:
                            <input type="text" name="chef" placeholder={chef} className="input input-bordered w-full" id="chef" />
                        </label>
                        <label className="flex flex-col" htmlFor="taste">Taste:
                            <input type="text" name="taste" placeholder={taste} className="input input-bordered w-full" id="taste" />
                        </label>
                        <label className="flex flex-col" htmlFor="details">Details:
                            <input type="text" name="details" placeholder={details} className="input input-bordered w-full" id="details" />
                        </label>
                    </div>
                </div>
                <div className="w-[80%] mx-auto space-y-2">
                    <label className="flex flex-col" htmlFor="photo">Photo:
                        <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full" id="photo" />
                    </label>
                    <input className="w-full btn bg-[#D2B48C]" type="submit" value="Update Coffee" />
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;