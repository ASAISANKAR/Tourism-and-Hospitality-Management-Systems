import React, { useState, useEffect } from "react";
import './Life.css';
const LifeInsurance = () => {
  const [ageRange, setAgeRange] = useState("");
  const [gender, setGender] = useState("");
  const [insurancePlans, setInsurancePlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [premiumAmount, setPremiumAmount] = useState(0);

  useEffect(() => {
    // Generate insurance plans based on user input
    if (ageRange && gender) {
      let plans = [];

      if (ageRange === "18-30") {
        plans.push({ name: "Plan A", premium: 100 });
        
        plans.push({ name: "Plan B", premium: 150 });<br></br>
        plans.push({ name: "Plan C", premium: 200 });<br></br>
      } else if (ageRange === "31-50") {
        plans.push({ name: "Plan D", premium: 250 });<br></br>
        plans.push({ name: "Plan E", premium: 300 });<br></br>
        plans.push({ name: "Plan F", premium: 350 });<br></br>
      } else {
        plans.push({ name: "Plan G", premium: 400 });<br></br>
        plans.push({ name: "Plan H", premium: 450 });<br></br>
        plans.push({ name: "Plan I", premium: 500 });<br></br>
      }

      if (gender === "male") {
        plans = plans.map((plan) => {
          return { ...plan, premium: plan.premium * 1.2 };
        });
      } else {
        plans = plans.map((plan) => {
          return { ...plan, premium: plan.premium * 0.8 };
        });
      }

      setInsurancePlans(plans);
    }
  }, [ageRange, gender]);

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
    setPremiumAmount(plan.premium);
  };

  return (
    <div className="container">
      <h1>Life Insurance</h1>
      <form>
        <label>
          Age range:
          <select
            value={ageRange}
            onChange={(e) => setAgeRange(e.target.value)}
          >
            <option value="">Select age range</option>
            <option value="18-30">18-30</option>
            <option value="31-50">31-50</option>
            <option value="51+">51+</option>
          </select>
        </label>
        <br />
        <label>
          Gender:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </form>

      {insurancePlans.length > 0 ? (
        <div>
          <h3>Select an insurance plan:</h3>
          <div className="plan-buttons">
            {insurancePlans.map((plan) => (
              <button
                key={plan.name}
                onClick={() => handlePlanSelection(plan)}
              >
                {plan.name} ({plan.premium})
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {selectedPlan ? (
        <div>
          <h3>Selected plan: {selectedPlan.name}</h3>
          <p>Premium amount: {premiumAmount}</p>
        </div>
      ) : null}
    </div>
  );
};

export default LifeInsurance;
