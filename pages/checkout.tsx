import { CheckoutForm } from '../components/CheckoutForm/CheckoutForm';
import { Main } from '../components/Main';

const CheckoutPage = () => {
  return (
    <Main>
      <CheckoutForm />
    </Main>

    //// form trial with uncontrolled form
    // <Main>
    //   {/* <form method="POST"> */}
    //   <form
    //     onSubmit={(e) => {
    //       e.preventDefault();
    //       console.log(e);
    //     }}
    //   >
    //     <label>
    //       Email
    //       <input
    //         type="email"
    //         name="email"
    //         // onChange={(event)=>{console.log(event.target.value)}}
    //       />
    //     </label>
    //     <button type="submit" className="border-2 border-green-400">
    //       Order
    //     </button>
    //   </form>
    // </Main>
  );
};

export default CheckoutPage;
