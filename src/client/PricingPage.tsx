import { AiOutlineCheck } from "react-icons/ai";
import stripePayment from "@wasp/actions/stripePayment";
import { useState } from "react";

const prices = [
  {
    name: "Single Resume",
    id: "single",
    href: "",
    price: "$2.95",
    description: "Create your profile once and apply for 10 jobs",
    features: [
      "Apply for 10 jobs",
      "Get your tailored profile",
      "No expiration date",
    ],
    disabled: false,
  },
  {
    name: "Monthly Subscription",
    id: "monthly",
    href: "#",
    priceMonthly: "$9.99",
    description:
      "Update your details and generate a new profile any time you want",
    features: [
      "Unlimited resumes",
      "Unlimited changes",
      "Unlimited applications",
      "Priority support",
      "Cancel any time",
    ],
  },
];

export default function PricingPage() {
  const [isLoading, setIsLoading] = useState(false);

  const clickHandler = async () => {
    setIsLoading(true);
    try {
      const response = await stripePayment();
      if (response?.sessionUrl) {
        window.open(response.sessionUrl, "_self");
      }
    } catch (e) {
      alert("Something went wrong. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-10 pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
          {prices.map((price) => {
            return (
              !price.disabled && (
                <div
                  key={price.id}
                  className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                >
                  <div>
                    <h3
                      id={price.id}
                      className="text-base font-semibold leading-7 text-purple-800"
                    >
                      {price.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        {price.priceMonthly || price.price}
                      </span>
                      {price.priceMonthly && (
                        <span className="text-base font-semibold leading-7 text-gray-600">
                          /month
                        </span>
                      )}
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                      {price.description}
                    </p>
                    <ul
                      role="list"
                      className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
                    >
                      {price.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <AiOutlineCheck
                            className="h-6 w-5 flex-none text-indigo-600"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={clickHandler}
                    aria-describedby={price.id}
                    disabled={price.disabled}
                    className={`${
                      price.disabled &&
                      "disabled:opacity-25 disabled:cursor-not-allowed"
                    } mt-8 block text-purple-50 rounded-md bg-purple-800 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-black shadow-sm hover:bg-purple-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-900`}
                  >
                    {isLoading ? "Loading..." : "Buy Now"}
                  </button>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}
