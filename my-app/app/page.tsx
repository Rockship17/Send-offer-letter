'use client'

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/ui/ranger-picker";

export default function Home() {
  const form = useForm({
    defaultValues: {
      email: "",
      fullname: "",
      position: "",
      salary: "",
      probationPeriod: {
        from: new Date(),
        to: new Date(),
      },
      holidays: "",
      startDate: new Date(),
      officeAddress: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Card className="shadow-xl">
          <CardHeader className="space-y-2 border-b border-gray-200 bg-gray-50">
            <CardTitle className="text-2xl font-bold text-gray-900">Offer Letter Details</CardTitle>
            <p className="text-sm text-gray-600">Please fill in all the required information to generate the offer letter.</p>
          </CardHeader>
          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Information Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Email Address</FormLabel>
                          <FormControl>
                            <Input className="w-full" placeholder="Enter email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="fullname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Full Name</FormLabel>
                          <FormControl>
                            <Input className="w-full" placeholder="Enter full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Position Details Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Position Details</h3>
                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Position</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a position" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="developer">Developer</SelectItem>
                              <SelectItem value="designer">Designer</SelectItem>
                              <SelectItem value="manager">Manager</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="salary"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Salary (VNĐ)</FormLabel>
                          <FormControl>
                            <Input
                              className="w-full"
                              placeholder="Enter salary"
                              {...field}
                              onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, '');
                                const formattedValue = new Intl.NumberFormat('vi-VN', {
                                  style: 'currency',
                                  currency: 'VND'
                                }).format(Number(value));
                                field.onChange(formattedValue);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Probation Period Section */}
                  <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900">Probation Period</h3>
                    <FormField
                      control={form.control}
                      name="probationPeriod"
                      render={() => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Select Period</FormLabel>
                          <FormControl>
                            <DatePickerWithRange />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Additional Details Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Additional Details</h3>
                    <FormField
                      control={form.control}
                      name="holidays"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Holidays</FormLabel>
                          <FormControl>
                            <Input className="w-full" placeholder="Enter holidays" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="startDate"
                      render={() => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Start Date</FormLabel>
                          <FormControl>
                            <DatePicker />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Office Address Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Office Address</h3>
                    <FormField
                      control={form.control}
                      name="officeAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Address</FormLabel>
                          <FormControl>
                            <Input className="w-full" placeholder="Enter office address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <Button type="submit" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                    Generate Offer Letter
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}