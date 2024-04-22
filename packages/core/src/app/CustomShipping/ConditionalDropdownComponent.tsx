// import React, { useState } from 'react';
// const ConditionalDropdownComponent = () => {
//   const [firstDropdownValue, setFirstDropdownValue] = useState('');
//   const [showSecondDropdown, setShowSecondDropdown] = useState(false);
//   const [secondDropdownValue, setSecondDropdownValue] = useState('');
//   const handleFirstDropdownChange = (event:any) => {
//     const value = event.target.value;
//     setFirstDropdownValue(value);
//     setShowSecondDropdown(value === 'a');
//     setSecondDropdownValue('');
//   };
//   const handleSecondDropdownChange = (event:any) => {
//     const value = event.target.value;
//     setSecondDropdownValue(value);
//   };
//   return (
//     <div>
//       <label htmlFor="firstDropdown">Select an option:</label>
//       <select id="firstDropdown" value={firstDropdownValue} onChange={handleFirstDropdownChange}>
//         <option value="">Select</option>
//         <option value="a">a</option>
//         <option value="b">b</option>
//         <option value="c">c</option>
//       </select>
//       {showSecondDropdown && (
//         <div>
//           <label htmlFor="secondDropdown">Select another option:</label>
//           <select id="secondDropdown" value={secondDropdownValue} onChange={handleSecondDropdownChange}>
//             <option value="">Select</option>
//             <option value="d">d</option>
//             <option value="e">e</option>
//           </select>
//         </div>
//       )}
//     </div>
//   );
// };
// export default ConditionalDropdownComponent;





import React, { useState } from "react";

interface Props {
  cart: any

}



interface FieldType {
  label: string;
  type: string;
}
interface FormData {
  [key: string]: string;
}

const CustomerPreferred: Record<string, FieldType> = {
  CarrierName: {
    label: "Carrier Name",
    type: "text",
  },
  ContactName: {
    label: "Contact Name",
    type: "text",
  },
  // Add other fields as needed
};

const WillCall: Record<string, FieldType> = {
  ContactName: {
    label: "Contact Name",
    type: "text",
  },
  ContactEmail: {
    label: "Contact Email",
    type: "email",
  },
  // Add other fields as needed
};

const UPS: Record<string, FieldType> = {
  Ground: {
    label: "Ground",
    type: "radio",
  },
  // Add other fields as needed
};

const FedEx: Record<string, FieldType> = {
  Ground: {
    label: "Ground",
    type: "radio",
  },
  // Add other fields as needed
};

const ConditionalDropdownComponent: React.FC<Props> = ({ cart }) => {
  const [formData, setFormData] = useState<FormData>({});
  const [FormFields, setFormFields] = useState<typeof UPS | typeof FedEx>(CustomerPreferred);
  const [selectedRadioOption, setSelectedRadioOption] = useState<string>("Ground");
  const [selectedOption, setSelectedOption] = useState<string>("Customer Pays Freight");
  const [selectedShipper, setSelectedShipper] = useState<string>("Customer Preferred Carrier");


  async function updateCartDiscount() {
    console.log('inside updateCartDiscount ');
    const myHeaders = new Headers(); 
    myHeaders.append("X-Auth-Token", "44v4r4o38ki0gznr4kn5exdznzft69c"); 
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append( 'Access-Control-Allow-Origin', '*');
    //const raw = JSON.stringify({ "cart": { "discounts": [{ "discounted_amount": 2, "name": "manual" }] } });

    const checkoutid = cart.id; 
    const res=await fetch(`https://api-hit-pied.vercel.app/discount/${checkoutid}`, { method: "GET", headers: myHeaders, redirect: "follow" });
    const data= await res.json();
    console.log('updated cart value returned from dicounted api: ',data);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    cart.cartAmount = 200;
    console.log('cart updated: ', cart);

    fetch(`https://api-hit-pied.vercel.app/cart/cart1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'

      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response from server:', data);
        updateCartDiscount();
        //cart.cartAmount = 200;
        // Do something with the response data
      })
      .catch(error => {
        cart.cartAmount = 200;
        console.error('Error:', error);
      });
  };



  const handleRadioOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadioOption(event.target.value);
  };
  const obj = { selectedOption, selectedRadioOption, selectedShipper, handleRadioOptionChange };
  console.log(obj)
  const handleInputChange = (fieldName: string, value: string) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleShipperChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const Shipper = event.target.value;
    setSelectedShipper(Shipper);
    if (Shipper === 'UPS') {
      setFormFields(UPS);
    } else if (Shipper === 'Will Call') {
      setFormFields(WillCall);
    }
    else if (Shipper === 'FedEx') {
      setFormFields(FedEx);
    }
    else if (Shipper === 'Customer Preferred Carrier') {
      setFormFields(CustomerPreferred);
    }
  };

  const renderFormField = (fieldName: string, fieldType: FieldType) => {
    if (fieldType.type === "text") {
      return (
        <>
          <label htmlFor={fieldName}>{fieldName}</label>
          <input
            type="text"
            value={formData[fieldName] || ""}
            onChange={(e) => handleInputChange(fieldName, e.target.value)}
            placeholder={fieldName}
          />
        </>
      );
    } else if (fieldType.type === "dropdown") {
      return (
        <select
          value={formData[fieldName] || ""}
          onChange={(e) => handleInputChange(fieldName, e.target.value)}
        >
          <option value="">Select {fieldName}</option>
          {/* Render dropdown options */}
        </select>
      );
    } else if (fieldType.type === "radio") {
      return (
        <div>
          {/* Render radio options */}
        </div>
      );
    } else if (fieldType.type === "email") {
      return (
        <>
          <label htmlFor={fieldName}>{fieldType.label}</label>
          <input
            id={fieldName}
            type="email"
            onChange={(e) => handleInputChange(fieldName, e.target.value)}
            placeholder={fieldType.label}
          />
        </>
      );
    }
    return null;
  };

  return (
    <div className="container">
      <div>
        <div>
          {console.log('this is from conditional Page: ', cart)}
          <div>Who Pays Shipping</div>
          <select onChange={handleOptionChange}>
            <option value="Customer Pays Freight">Customer Pays Freight</option>
            <option value="Seller Pays Freight">Seller Pays Freight</option>
          </select>
        </div>

        <div>
          <div>Shipper To Use</div>
          <select onChange={handleShipperChange}>
            <option value="Customer Preferred Carrier">Customer Preferred Carrier</option>
            <option value="FedEx">FedEx</option>
            <option value="UPS">UPS</option>
            <option value="Will Call">Will Call</option>
          </select>
        </div>
      </div>

      <div>
        <h2>Dynamic Form</h2>
        <form onSubmit={handleSubmit}>
          {Object.entries(FormFields).map(([fieldName, fieldType]) => (
            <div key={fieldName}>{renderFormField(fieldName, fieldType)}</div>
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ConditionalDropdownComponent;
