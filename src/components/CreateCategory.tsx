import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { categoryState } from "../atoms";

interface IForm {
    cate: string;
}

function CreateCategory() {
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const setCategory = useSetRecoilState(categoryState)
    const handleValid = ({cate}:IForm) => {
        
    }
    return <form onSubmit={handleSubmit(handleValid)}>
    <input {...register("cate", {
        required: "Please write a Category",
    })} placeholder="Write a Category" />
    <button>Add</button>
</form>;
}

export default CreateCategory;