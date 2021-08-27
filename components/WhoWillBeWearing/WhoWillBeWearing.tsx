//TITULO COMPONENTE APARTE Y MANDAR COMO PROP LO QUE DIGA EL TITULO LO MISMO CON LA DESCRIPCION
// LO MISMO CON SELECT SACAR COMPONENTE APARTE , MANDAR OPCIONES COMO PROP
// INPUT
// BOTON DE REGRESAR Y NEXT
import PrimaryButton from "../Common/PrimaryButton/PrimaryButton";
import Inputs from "../Common/Inputs";
import Tittles from "../Common/Tittles";

const WhoWillBeWearing = () => {
  return (
    <div className="w-full m-auto px-4 lg:px-52 py-40 lg:py-44">
      <div className="lg:w-3/5 max-w-2xl">
        <div className="flex">
          <PrimaryButton text="Back" />
          <Tittles hDosText=" Who Will Be Wearing The Ring?" />
        </div>
        <p className="mb-6 lg:mb-14 text-gray-500 leading-relaxed">
          <Tittles
            pDosText="Are you designing a ring for your significant other, or designing your
          own ring?"
          />
        </p>
        <select
          className="
                  lg:mb-12 
                  text-center
                  mb-32
                  py-4
                  px-8
                  md:mr-4
                  text-sm text-black
                  font-medium
                  leading-normal
                  bg-white
                "
        >
          <option>-- Choose recipient --</option>
          <option>My significant other</option>
          <option>Me</option>
        </select>
      </div>
      <p className="mb-6 lg:mb-14 text-gray-500 leading-relaxed">
        Who’s the lucky guy or gal?
      </p>
      <div className="bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
        <input
          className="bg-gray-100 outline-none"
          type="text"
          placeholder="Your S/O's First Name"
        />
      </div>
      <div className="flex mt-6">
        <label className="flex items-center">
          <Inputs inputText="I'd prefer not to say" />
        </label>
      </div>
      <p className="mb-6 lg:mb-14 text-gray-500 leading-relaxed">
        Looking around for a ring someone might surprise you with later, or are
        you planning to purchase your own ring?
      </p>
      <select
        className="
                  lg:mb-12 
                  text-center
                  mb-32
                  py-4
                  px-8
                  md:mr-4
                  text-sm text-black
                  font-medium
                  leading-normal
                  bg-white
                "
      >
        <option>-- Select response --</option>
        <option>Shopping around</option>
        <option>Planning to buy my own ring</option>
        <option>My S/O and I are shopping together</option>
      </select>
      {<PrimaryButton text="Next" />}
    </div>
  );
};
export default WhoWillBeWearing;
