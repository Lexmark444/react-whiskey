import Button from "./Button"
import Input from "./Input"
import { useForm } from "react-hook-form"
import { server_calls } from '../api/server';
import { useDispatch, useStore } from "react-redux"
import { chooseBrand, chooseCategory, chooseDesc, chooseAge, chooseValue } from "../redux/slices/RootSlice"

// interfaces

interface ContactFormProps {
  id?: string[]
}

const ContactForm = (props: ContactFormProps) => {
  
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {

    console.log(`'ID: ${typeof props.id}`);    
    console.log(props.id);
    console.log(data);
    
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.name } ${ props.id}`);
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseBrand(data.brand));
      dispatch(chooseCategory(data.category));
      dispatch(chooseDesc(data.desc));
      dispatch(chooseAge(data.age));
      dispatch(chooseValue(data.value));
      

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000);
    }
    
  }

  return (


    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="brand">Brand</label>
          <Input {...register('brand')} name="brand" placeholder="Brand"/>
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <Input {...register('category')} name="category" placeholder="Category"/>
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <Input {...register('desc')} name="desc" placeholder="Description"/>
        </div>
        <div>
          <label  htmlFor="age">Age</label>
          <Input {...register('age')} name="age" placeholder="Age"/>
        </div>
        <div>
          <label htmlFor="value">Value</label>
          <Input {...register('value')} name="value" placeholder="Value"/>
        </div>
        <div className="flex p-1">
          <Button 
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
