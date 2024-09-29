import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Phone, Mail, MapPin } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { validationSchema } from '@/utils/ValidationSchema';
import { toast } from 'sonner'


export const GetInTouchModal: React.FC = () => {

    let initialValues = { title: '', body: '' }

    const handleSubmit = (values: any,{ resetForm }: any) => {
        console.log(values);
        toast.success("new post added...")
        resetForm()
    }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white text-black px-6 py-2 text-sm md:text-base font-semibold hover:bg-gray-200">
          Get in touch
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-4xl p-0">
        <div className="flex flex-col md:flex-row w-full shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-20">
            <h2 className="text-2xl font-bold mb-6">Add post</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({values }) => (
                <Form className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <Field as={Input} id="title" name="title" placeholder="Enter your title" className="mt-1" />
                    <ErrorMessage name="title" component="div" className="text-red-500 text-xs mt-1" />
                  </div>
                  <div>
                    <div className='flex justify-between items-center' >

                    <label htmlFor="body" className="block text-sm font-medium text-gray-700">Body</label>
                        <span className=" right-2  text-xs  text-gray-500">{values.body.length}/100</span>
                    </div>
                    <div className="relative mt-1">
                      <Field as={Textarea} id="body" name="body" placeholder="Type your body text here..." className="pr-8" rows={4} />
                      <button type="button" className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                        <X size={16} />
                      </button>
                    </div>
                    <ErrorMessage name="body" component="div" className="text-red-500 text-xs mt-1" />
                  </div>
                  <Button type="submit" className="w-full bg-black text-white" >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
          <Card className="w-full md:w-1/2 text-white relative overflow-hidden rounded-l-none p-6 md:p-10" style={{backgroundColor:"#4E3659"}}>
            <CardHeader>
              <CardTitle className="text-md">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className='text-sm'>+91 93456 78459</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className='text-sm'>demo@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span className='text-sm'>132 Dartmouth Street, KK Nagar, Chennai 600025.</span>
              </div>
              <Button variant="secondary" className="bg-white text-purple-800 hover:bg-gray-100">
                View directions
              </Button>
            </CardContent>
            <div className="absolute -bottom-5 -right-5 w-48 h-48 rounded-full opacity-50 transform translate-x-1/4 translate-y-1/4" style={{backgroundColor:"#2F2035"}}></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full opacity-50 transform translate-x-1/3 translate-y-1/3" style={{backgroundColor:"#2F2035"}}></div>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};