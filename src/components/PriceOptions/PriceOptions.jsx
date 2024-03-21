import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
          {
            "id": 1,
            "name": "Basic Membership",
            "features": [
              "Access to cardio machines",
              "Access to weightlifting area",
              "Access to locker room",
              "Personal trainer sessions not included"
            ],
            "price": "29.99"
          },
          {
            "id": 2,
            "name": "Standard Membership",
            "features": [
              "Access to cardio machines",
              "Access to weightlifting area",
              "Access to locker room",
              "Limited group fitness classes included",
              "Discounted personal trainer sessions"
            ],
            "price": "49.99"
          },
          {
            "id": 3,
            "name": "Premium Membership",
            "features": [
              "Access to cardio machines",
              "Access to weightlifting area",
              "Access to locker room",
              "Unlimited group fitness classes included",
              "Complimentary personal trainer sessions",
              "Access to sauna and steam room"
            ],
            "price": "79.99"
          }
        ]
      
    return (
        <div className="m-12">
        <h2 className='text-5xl font-bold font-mono'>Best price in the town</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
              }
            </div>
        </div>
    );
};

export default PriceOptions;