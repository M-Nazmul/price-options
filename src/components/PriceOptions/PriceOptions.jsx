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
            "price": "$29.99 per month"
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
            "price": "$49.99 per month"
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
            "price": "$79.99 per month"
          }
        ]
      
    return (
        <div>
        <h2 className='text-3xl'>Best price in the town</h2>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;