// /** @jsx jsx */
// import { jsx } from "theme-ui"
// import { useStaticQuery, graphql } from "gatsby"
// import * as styles from "./styles.module.scss"

// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from "react-accessible-accordion"

// //Components
// import Container from "components/Container"

// export default () => {
//   const data = useStaticQuery(graphql`
//     {
//       allWpDpcfaq {
//         nodes {
//           dpcfaqs_acf {
//             answer
//             question
//           }
//         }
//       }
//     }
//   `)
//   const faqs = data.allWpDpcfaq.nodes
//   return (
//     <Container>
//       <div id="faqs" className={styles.faqsWrapper}>
//         <h2 sx={{ color: "primary", fontWeight: "bold" }}>FAQs</h2>
//         <Accordion>
//           {faqs.map((faq, i) => {
//             return (
//               <AccordionItem key={i}>
//                 <AccordionItemHeading>
//                   <AccordionItemButton>
//                     {faq.dpcfaqs_acf.question}
//                   </AccordionItemButton>
//                 </AccordionItemHeading>
//                 <AccordionItemPanel>
//                   <p>{faq.dpcfaqs_acf.answer}</p>
//                 </AccordionItemPanel>
//               </AccordionItem>
//             )
//           })}
//         </Accordion>
//       </div>
//     </Container>
//   )
// }
