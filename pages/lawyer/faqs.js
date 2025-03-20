import LawyerDashboardWrapper from "@/components/LawyerDashboardWrapper";
import { Heading,ChakraProvider, CSSReset, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import React from "react";


const FAQPage = () => {
    const faqData = [
      { "question": "What is Agritrade?", "answer": "Agritrade is a mobile app designed to connect farmers directly with companies seeking crops and products. It simplifies the process of selling and buying agricultural produce, ensuring better pricing and reducing reliance on intermediaries."},
      { "question": "How do I register on Agritrade?", "answer": "To register, login on Agritrade app from the App Store or Google Play or google, and follow the registration steps. You’ll need to provide basic information such as your name, contact details, and farm details." },
      { "question": "How do I list my crops or products for sale?", "answer": "Once registered, log in to the app and navigate to the “List Your Crops” section. Enter details about the crops or products you wish to sell, including quantity, expected pricing, and availability dates."},
      { "question": " How can I update my crop details or profile information?", "answer":"Go to the “My Profile” section in the app. From there, you can update your crop details, contact information, and other profile settings."},
      { "question": "How does Agritrade help me find buyers?","answer":"Agritrade uses algorithms to match your crop listings with companies looking for those specific products. You will receive notifications when a company expresses interest or matches your listed crops."},
      { "question": " Can I negotiate prices with buyers?","answer":"Yes, you can communicate directly with companies through the app’s messaging feature to negotiate prices, discuss product quality, and finalize deals."},
      { "question": "How do I create or view contracts?","answer":"When a company wants to make a purchase, they can create a contract through the app. You will be notified and can view and accept the contract directly in the app"},
      { "question": " Is there a fee for using Agritrade?","answer":"Agritrade offers a free basic service. Some premium features or services may incur additional charges, which will be clearly communicated within the app."},
      { "question": "How can I provide feedback or suggestions for the app?", "answer":"We welcome your feedback! You can submit suggestions or report issues through the “Feedback” section in the app or by contacting our support team"},
      { "question": "What should I do if I forget my password?", "answer":"If you forget your password, use the “Forgot Password” feature on the login screen to reset it. You will receive instructions to create a new password via email or SMS."},
      { "question": " How do I manage and track my transactions?", "answer": "You can manage and track all your transactions through the “Transactions” section in the app. This section provides an overview of your past and current deals, including details such as transaction status, payment information, and delivery schedules. You can also view transaction history and download invoices if needed."},
    ];
  
    return (
      <Box p={4}>
        <Accordion allowToggle>
          {faqData.map((faq, index) => (
            <AccordionItem key={index}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    );
  };

export default function Faqs() {

    return (
        <LawyerDashboardWrapper page="faqs">
           <Heading fontSize="3xl">FAQ&apos;S</Heading>
            <FAQPage/>
    
        </LawyerDashboardWrapper>
    )
}