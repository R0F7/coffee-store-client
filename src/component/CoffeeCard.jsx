import { FaRegEye } from "react-icons/fa6";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-jet-one.vercel.app/coffee/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                              });
                              const remaining = coffees.filter(cof => cof._id !== _id);
                              setCoffees(remaining)
                        }

                    })

            }
        });
    }

    return (
        <div className="bg-[#F5F4F1] flex border p-8">
            <div className="w-1/3">
                <div className="">
                    <img className="" src={coffee.photo} alt="" />
                </div>
            </div>
            <div className="flex items-center justify-between w-2/3">
                <div className="text-xl font-semibold space-y-2 text-[#1B1A1A]">
                    <h4>Name: <span className="font-normal text-[#5C5B5B]">{coffee.name}</span></h4>
                    <h4>Chef: <span className="font-normal text-[#5C5B5B]">{coffee.chef}</span></h4>
                    <h4>Category: <span className="font-normal text-[#5C5B5B]">{coffee.category}</span></h4>
                </div>
                <div>
                    <span ><FaRegEye className="bg-[#D2B48C] rounded-lg text-white w-12 h-12 mb-4 p-3" /></span>

                    <Link to={`/updateCoffee/${coffee._id}`}><LuPencil className="bg-[#3C393B] rounded-lg text-white w-12 h-12 mb-4 p-3" /></Link>

                    <span><RiDeleteBin6Line
                        onClick={() => handleDelete(coffee._id)}
                        className="bg-[#EA4744] rounded-lg text-white w-12 h-12 mb-4 p-3"
                    /></span>

                </div>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.func,
}

export default CoffeeCard;