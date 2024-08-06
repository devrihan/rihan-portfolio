// // // // 'use client';
// // // // import React, { useState, useEffect } from 'react';
// // // // import { Button } from '@/components/ui/button';
// // // // import MotionWrap from '@/components/motion-wrap';
// // // // import { toast } from '@/components/ui/use-toast';
// // // // import { GithubIcon, LinkedinIcon } from 'lucide-react';
// // // // import ContactForm from './contact-form';
// // // // import { contact } from '@/components/sections/contact/config';

// // // // interface ValidationErrors {
// // // //   success: boolean;
// // // //   message: string;
// // // //   errors?: {
// // // //     name?: string[] | undefined;
// // // //     email?: string[] | undefined;
// // // //     message?: string[] | undefined;
// // // //   };
// // // // }

// // // // const initialState: ValidationErrors = {
// // // //   success: false,
// // // //   errors: {},
// // // //   message: ''
// // // // };

// // // // function Contact() {
// // // //   const [state, setState] = useState(initialState);
// // // //   const [formData, setFormData] = useState({
// // // //     name: '',
// // // //     email: '',
// // // //     message: ''
// // // //   });

// // // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleSubmit = (e: React.FormEvent) => {
// // // //     e.preventDefault();
// // // //     const mailtoLink = `mailto:${formData.email}?subject=Message from ${formData.name}&body=${formData.message}`;
// // // //     window.location.href = mailtoLink;
// // // //     setState({
// // // //       success: true,
// // // //       message: 'Thank you for reaching out! Your message has been sent.',
// // // //       errors: {}
// // // //     });
// // // //   };

// // // //   useEffect(() => {
// // // //     if (state.message === '') return;

// // // //     toast({
// // // //       title: state.message
// // // //     });
// // // //   }, [state]);

// // // //   return (
// // // //     <MotionWrap className="w-full py-24 lg:py-32" id="contact">
// // // //       <div className=" px-4 md:px-6">
// // // //         <div className="grid gap-10 lg:grid-cols-2">
// // // //           <div className="space-y-3">
// // // //             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
// // // //               Contact Me
// // // //             </h2>
// // // //             <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
// // // //               Have a question or want to work together? Send me a message using
// // // //               the form.
// // // //             </p>
// // // //             <p className="text-muted-foreground">
// // // //               Email:{' '}
// // // //               <a className="hover:underline" href={`mailto:${contact.email}`}>
// // // //                 {contact.email}
// // // //               </a>
// // // //             </p>
// // // //             <div className="flex space-x-1">
// // // //               {contact.socials?.github && (
// // // //                 <Button variant="outline" size="icon" asChild>
// // // //                   <a target="_blank" href={contact.socials.github}>
// // // //                     <GithubIcon className="h-4 w-4" />
// // // //                   </a>
// // // //                 </Button>
// // // //               )}
// // // //               {contact.socials?.linkedin && (
// // // //                 <Button variant="outline" size="icon" asChild>
// // // //                   <a target="_blank" href={contact.socials.linkedin}>
// // // //                     <LinkedinIcon className="h-4 w-4" />
// // // //                   </a>
// // // //                 </Button>
// // // //               )}
// // // //             </div>
// // // //           </div>
// // // //           <form onSubmit={handleSubmit} className="grid gap-4">
// // // //             <ContactForm state={state} />
// // // //           </form>
// // // //         </div>
// // // //       </div>
// // // //     </MotionWrap>
// // // //   );
// // // // }

// // // // export default Contact;

// // // 'use client';
// // // import React, { useState, useEffect } from 'react';
// // // import { Button } from '@/components/ui/button';
// // // import MotionWrap from '@/components/motion-wrap';
// // // import { toast } from '@/components/ui/use-toast';
// // // import { GithubIcon, LinkedinIcon } from 'lucide-react';
// // // import ContactForm from './contact-form';
// // // import { contact } from '@/components/sections/contact/config';

// // // interface ValidationErrors {
// // //   success: boolean;
// // //   message: string;
// // //   errors?: {
// // //     name?: string[] | undefined;
// // //     email?: string[] | undefined;
// // //     message?: string[] | undefined;
// // //   };
// // // }

// // // const initialState: ValidationErrors = {
// // //   success: false,
// // //   errors: {},
// // //   message: ''
// // // };

// // // function Contact() {
// // //   const [state, setState] = useState(initialState);
// // //   const [formData, setFormData] = useState({
// // //     name: '',
// // //     email: '',
// // //     message: ''
// // //   });

// // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     const mailtoLink = `mailto:${contact.email}?subject=Message from ${formData.name}&body=${formData.message}`;
// // //     window.location.href = mailtoLink;
// // //     setState({
// // //       success: true,
// // //       message: 'Thank you for reaching out! Your message has been sent.',
// // //       errors: {}
// // //     });
// // //   };

// // //   useEffect(() => {
// // //     if (state.message === '') return;

// // //     toast({
// // //       title: state.message
// // //     });
// // //   }, [state]);

// // //   return (
// // //     <MotionWrap className="w-full py-24 lg:py-32" id="contact">
// // //       <div className=" px-4 md:px-6">
// // //         <div className="grid gap-10 lg:grid-cols-2">
// // //           <div className="space-y-3">
// // //             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
// // //               Contact Me
// // //             </h2>
// // //             <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
// // //               Have a question or want to work together? Send me a message using
// // //               the form.
// // //             </p>
// // //             <p className="text-muted-foreground">
// // //               Email:{' '}
// // //               <a className="hover:underline" href={`mailto:${contact.email}`}>
// // //                 {contact.email}
// // //               </a>
// // //             </p>
// // //             <div className="flex space-x-1">
// // //               {contact.socials?.github && (
// // //                 <Button variant="outline" size="icon" asChild>
// // //                   <a target="_blank" href={contact.socials.github}>
// // //                     <GithubIcon className="h-4 w-4" />
// // //                   </a>
// // //                 </Button>
// // //               )}
// // //               {contact.socials?.linkedin && (
// // //                 <Button variant="outline" size="icon" asChild>
// // //                   <a target="_blank" href={contact.socials.linkedin}>
// // //                     <LinkedinIcon className="h-4 w-4" />
// // //                   </a>
// // //                 </Button>
// // //               )}
// // //             </div>
// // //           </div>
// // //           <form onSubmit={handleSubmit} className="grid gap-4">
// // //             <ContactForm state={state} onChange={handleChange} />
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </MotionWrap>
// // //   );
// // // }

// // // export default Contact;
// // 'use client';

// // import React, { useState, useEffect } from 'react';
// // import { Button } from '@/components/ui/button';
// // import MotionWrap from '@/components/motion-wrap';
// // import { toast } from '@/components/ui/use-toast';
// // import { GithubIcon, LinkedinIcon } from 'lucide-react';
// // import ContactForm from './contact-form';
// // import { contact } from '@/components/sections/contact/config';

// // interface ValidationErrors {
// //   success: boolean;
// //   message: string;
// //   errors?: {
// //     name?: string[] | undefined;
// //     email?: string[] | undefined;
// //     message?: string[] | undefined;
// //   };
// // }

// // const initialState: ValidationErrors = {
// //   success: false,
// //   errors: {},
// //   message: ''
// // };

// // function Contact() {
// //   const [state, setState] = useState(initialState);
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     message: ''
// //   });

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault(); // Prevents page refresh
// //     const mailtoLink = `mailto:${contact.email}?subject=Message from ${formData.name}&body=${formData.message}`;
// //     window.location.href = mailtoLink;
// //     setState({
// //       success: true,
// //       message: 'Thank you for reaching out! Your message has been sent.',
// //       errors: {}
// //     });
// //   };

// //   useEffect(() => {
// //     if (state.message === '') return;

// //     toast({
// //       title: state.message
// //     });
// //   }, [state]);

// //   return (
// //     <MotionWrap className="w-full py-24 lg:py-32" id="contact">
// //       <div className="px-4 md:px-6">
// //         <div className="grid gap-10 lg:grid-cols-2">
// //           <div className="space-y-3">
// //             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
// //               Contact Me
// //             </h2>
// //             <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
// //               Have a question or want to work together? Send me a message using
// //               the form.
// //             </p>
// //             <p className="text-muted-foreground">
// //               Email:{' '}
// //               <a className="hover:underline" href={`mailto:${contact.email}`}>
// //                 {contact.email}
// //               </a>
// //             </p>
// //             <div className="flex space-x-1">
// //               {contact.socials?.github && (
// //                 <Button variant="outline" size="icon" asChild>
// //                   <a target="_blank" href={contact.socials.github}>
// //                     <GithubIcon className="h-4 w-4" />
// //                   </a>
// //                 </Button>
// //               )}
// //               {contact.socials?.linkedin && (
// //                 <Button variant="outline" size="icon" asChild>
// //                   <a target="_blank" href={contact.socials.linkedin}>
// //                     <LinkedinIcon className="h-4 w-4" />
// //                   </a>
// //                 </Button>
// //               )}
// //             </div>
// //           </div>
// //           <form onSubmit={handleSubmit} className="grid gap-4">
// //             <ContactForm state={state} onChange={handleChange} />
// //           </form>
// //         </div>
// //       </div>
// //     </MotionWrap>
// //   );
// // }

// // export default Contact;
// 'use client';

// import React from 'react';
// import { Button } from '@/components/ui/button';
// import MotionWrap from '@/components/motion-wrap';
// import { toast } from '@/components/ui/use-toast';
// import { GithubIcon, LinkedinIcon } from 'lucide-react';
// import { contact } from '@/components/sections/contact/config';

// function Contact() {
//   return (
//     <MotionWrap className="w-full py-24 lg:py-32" id="contact">
//       <div className="px-4 md:px-6">
//         <div className="grid gap-10 lg:grid-cols-2">
//           <div className="space-y-3">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//               Contact Me
//             </h2>
//             <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//               Have a question or want to work together? You can reach out to me
//               via email or through my social media profiles.
//             </p>
//             <p className="text-muted-foreground">
//               Email:{' '}
//               <a className="hover:underline" href={`mailto:${contact.email}`}>
//                 {contact.email}
//               </a>
//             </p>
//             <div className="flex space-x-1">
//               {contact.socials?.github && (
//                 <Button variant="outline" size="icon" asChild>
//                   <a target="_blank" href={contact.socials.github}>
//                     <GithubIcon className="h-4 w-4" />
//                   </a>
//                 </Button>
//               )}
//               {contact.socials?.linkedin && (
//                 <Button variant="outline" size="icon" asChild>
//                   <a target="_blank" href={contact.socials.linkedin}>
//                     <LinkedinIcon className="h-4 w-4" />
//                   </a>
//                 </Button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </MotionWrap>
//   );
// }

// export default Contact;
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import MotionWrap from '@/components/motion-wrap';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import { contact } from '@/components/sections/contact/config';

function Contact() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="contact">
      <div className="flex flex-col items-center justify-center px-4 md:px-6">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Contact Me
          </h2>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a question or want to work together? You can reach out to me
            via email or through my social media profiles.
          </p>
          <p className="text-muted-foreground">
            Email:{' '}
            <a className="hover:underline" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </p>
          <div className="flex justify-center space-x-1">
            {contact.socials?.github && (
              <Button variant="outline" size="icon" asChild>
                <a target="_blank" href={contact.socials.github}>
                  <GithubIcon className="h-4 w-4" />
                </a>
              </Button>
            )}
            {contact.socials?.linkedin && (
              <Button variant="outline" size="icon" asChild>
                <a target="_blank" href={contact.socials.linkedin}>
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Contact;
