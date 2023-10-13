import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BillingDetails from '../../components/BillingDetails';
import PaymentMethod from '../../components/PaymentMethod';
import OrderSummary from '../../components/OrderSummary';
import withAuth from "../../HOC";
import { useSelector } from 'react-redux';
import { Divider } from '@mui/material';

const steps = ['Billing details', 'Order Summary', 'Payment Method'];
const stepContent = [
  [<BillingDetails />],
  [<OrderSummary />],
  [<PaymentMethod />],
  'Thanks for Shopping'
  // Add more step content here
];
const CheckOut = () => {


  const cartData = useSelector((state) => state?.Cart?.cartItems);
  const subTotal = useSelector((state) => state?.Cart?.subTotal);
  const taxAmount = useSelector((state) => state?.Cart?.taxAmount);
  const totalPriceWithTax = useSelector((state) => state?.Cart?.totalPrice);

  console.log(cartData,"cartDatacartDatacartData")

  // const stepContent = [
  //     {
  //         component:<BillingDetails />,
  //         component:<OrderSummary />,
  //         component:<PaymentMethod />

  //     }

  //     // Add more step content here
  //   ];
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  return (
    <div className='top-spacing px-20 pt-12'>
      {/* <Box sx={{ width: '100%' }}>
        <Stepper sx={{
          width: "80%",
          margin: "0 auto"
        }} activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            // if (isStepOptional(index)) {
            //   labelProps.optional = (
            //     <Typography variant="caption">Optional</Typography>
            //   );
            // }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Thanks For Shopping
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button className='bg-green-600 text-white rounded-lg hover:bg-green-800' onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {stepContent[activeStep].map((component, index) => (
              <div key={index}>
                {component}
              </div>
            ))}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                className='br-light-grey hover:br-light-grey text-black rounded-lg'
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <Button className='bg-black rounded-lg text-white hover:bg-black' onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button onClick={handleNext} className='bg-orange-500 hover:bg-orange-700 text-white rounded-lg'>
                {activeStep === stepContent.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}

      </Box> */}
      <div className="lg:flex lg:space-x-4">
        <div className="lg:w-8/12">
          <div className="bg-white p-4 shadow-lg">

          </div>
        </div>

        <div className="lg:w-4/12">
          <div className="bg-white p-4 shadow-lg">
            <div className='total-price'>
              <div className='f-18 nova-bold black-text uppercase text-left h-12 flex align-center'>
                Order Summary
              </div>
              <Divider />
              <div className='flex justify-between h-12'>
                <div className='f-18 nova-bold black-text proxima-regular capitalize'>
                  order total:
                </div>
                <div className='f-18 nova-bold black-text uppercase'>
                  {subTotal ? subTotal : 0}
                </div>
              </div>
              <Divider />
              <div className='flex justify-between h-12'>
                <div className='f-18 nova-bold black-text proxima-regular capitalize'>
                  Tax:
                </div>
                <div className='f-18 nova-bold black-text uppercase'>
                  {taxAmount ? taxAmount : 0}
                </div>
              </div>
              <Divider />
              <div className='flex justify-between h-12'>
                <div className='f-18 nova-bold black-text proxima-regular capitalize'>
                  Total:
                </div>
                <div className='f-18 nova-bold black-text uppercase'>
                  {totalPriceWithTax ? totalPriceWithTax : 0}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckOut
