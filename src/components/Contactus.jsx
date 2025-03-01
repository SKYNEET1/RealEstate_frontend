import React from 'react'
import { toast } from 'react-toastify';

const Contactus = () => {
// the below code is for the contact us page copied from the {Web3Forms} for sending the resopnse to the mail ID.
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "92ef8fa9-9c6f-419e-96bb-4e94fb2809d6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult(data.message);
    }
  };




  return (
    <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id='Contactus'>
       <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact
        <span className="underline underline-offset-4 decoration-1 ml-2 font-light">
          With Us
        </span>
      </h2>
      <p className="text-center text-gray-600  max-w-80 mx-auto">
      Real Storeis from Those Who Found Home with Us
      </p>
      <p className="text-center text-gray-500 mb-12 max-w-80 text-sm mx-auto">
      (ଆମ ସହିତ ଘର ପାଇଥିବା ଲୋକମାନଙ୍କର ସତ୍ୟ କାହାଣୀ)
      </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap'>
          
            <div className='w-full md:w-1/2 text-left'>Your Name
            <input name='Name' className='w-full border border-b-gray-300 py-3 px-4 mt-2' type="text" placeholder='Your Name' required/>
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>Your Email
            <input name='email' className='w-full border border-b-gray-300 py-3 px-4 mt-2' type="email" placeholder='Your Name' required/>
            </div>
          
        </div>

        <div className='my-6 text-left'>
          Message
          <textarea className='w-full border border-green-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" placeholder='Message' required></textarea>
        </div>

        <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded cursor-pointer hover:bg-blue-700 hover:rounded-lg'>
          {result ? result : 'Send Message'}
        </button>
      </form>
    </div>
  )
}

export default Contactus