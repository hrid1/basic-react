
const SimpleForm = () => {

    const handleSubmit = e => {
        // console.log('form submit done')
        e.preventDefault();
        
        console.log(e.target.name.value)
        console.log(e.target.email.value)

        console.log("This form is submited!")
    }


    return (
        <div>

            <form onSubmit={handleSubmit}>
               <input type="text" name="name"/>
               <br />
               <input type="email" name="email"/>
               <br />
               <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default SimpleForm;