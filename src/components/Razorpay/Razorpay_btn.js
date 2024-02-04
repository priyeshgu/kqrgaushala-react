// import React from "react";

// export default function Razorpay_btn() {
//   return (
//     <div className="App">
//       <form className="float-end">
//         <script
//           src="https://checkout.razorpay.com/v1/payment-button.js"
//           data-payment_button_id="pl_NSacTuRkTWiIu8"
//           data-prefill="5100" // Amount in paise (e.g., 510000 for Rs 5100)
//           async={true}
//         ></script>
//         <span className="razorpay-payment-button svelte-ohbfj8">
//           <a
//             href="https://razorpay.com/payment-button/pl_NSacTuRkTWiIu8/view/?utm_source=payment_button&amp;utm_medium=button&amp;utm_campaign=payment_button"
//             type="submit"
//             className="PaymentButton PaymentButton--dark svelte-ekc7fv"
//             style={{ background: "rgb(0, 99, 50)" }}
//           >
//             <svg
//               width="18"
//               height="20"
//               viewBox="0 0 18 20"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="svelte-ekc7fv"
//             >
//               <path
//                 d="M7.077 6.476l-.988 3.569 5.65-3.589-3.695 13.54 3.752.004 5.457-20L7.077 6.476z"
//                 fill="#fff"
//                 className="svelte-ekc7fv"
//               ></path>
//               <path
//                 d="M1.455 14.308L0 20h7.202L10.149 8.42l-8.694 5.887z"
//                 fill="#fff"
//                 className="svelte-ekc7fv"
//               ></path>
//             </svg>
//             <div className="PaymentButton-contents svelte-ekc7fv">
//               <span className="PaymentButton-text svelte-ekc7fv">
//                 Donate
//               </span>
//               <div className="PaymentButton-securedBy svelte-ekc7fv">
//                 Secured by Razorpay
//               </div>
//             </div>
//           </a>
//         </span>
//       </form>
//     </div>
//   );
// }


import React, { useEffect } from "react";

export default function Razorpay_btn() {
  useEffect(() => {
    const rzpPaymentForm = document.getElementsByClassName("rzp_payment_form")[0];

    if (!rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_NSacTuRkTWiIu8";
      // script.dataset.amount="510000";
      // script.data-prefill.amount="5100"
      rzpPaymentForm.appendChild(script);
    }
  }, []);

  return (
    <div className="App">
      <form className="rzp_payment_form"></form>
    </div>
  );
}
