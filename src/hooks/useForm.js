import {useState} from "react";

const useForm = (initialData, onValidate) => {
    const [form, setForm] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const err = onValidate(form);
        setErrors(err);

        if (Object.keys(err).length === 0) {
            setLoading(true);
            console.log(form)
            console.log(JSON.stringify(form))

            fetch("https://my-email-api.azurewebsites.net/api/HttpEmailTrigger", {
                method: "POST",
                body: JSON.stringify(form)
            })
                .then(response => response)
                .then(data => {
                    console.log(data)
                    setLoading(false);
                    setForm(initialData);
                })
                .catch(err => {
                    console.log(err)
                    setLoading(false);
                });

        }
    }

    return {form, errors, loading, handleChange, handleSubmit};
}

export default useForm;