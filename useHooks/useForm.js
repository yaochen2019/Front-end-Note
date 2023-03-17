import React from 'react'

export default function useForm(initialValues) {
  const [formData,setFromData] = useState(initialValues);
  const setFormValue = (key,value)=>{
    setFormValue({...formData,[key]:value});
  }
  const resetFromValues = ()=>{
    setFromData(initialValues)
  }
  return [formData,setFromData,resetFromValues]
}
