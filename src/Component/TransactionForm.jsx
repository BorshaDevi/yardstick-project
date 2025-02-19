'use client'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  amount: z.number(),
  date: z.date(),
  descriptions:z.string(),

})

const TransactionForm=()=>{
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
        amount:'',
        date:'',
        descriptions:'',
        },
      })
    function onSubmit(values) {
        console.log(values)
      }
    
    return(
        <>
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input placeholder="Amount" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                {/* <Input placeholder="Description" {...field}  /> */}
                <Popover>
                     <PopoverTrigger asChild>
                       <Button
                         variant={"outline"}
                         className={cn(
                           "w-[280px] justify-start text-left font-normal",
                           !field.value && "text-muted-foreground"
                         )}
                       >
                         <CalendarIcon className="mr-2 h-4 w-4" />
                         {field.value? format(field.value, "PPP") : <span>Pick a date</span>}
                       </Button>
                     </PopoverTrigger>
                     <PopoverContent className="w-auto p-0 bg-white">
                       <Calendar
                         mode="single"
                         selected={field.value}
                         onSelect={field.onChange}
                         disabled={{before:new Date()}}
                         initialFocus
                       />
                     </PopoverContent>
                   </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="descriptions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descriptions</FormLabel>
              <FormControl>
              <Textarea placeholder='Text' {...field} ></Textarea>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       
        <Button type="submit">Submit</Button>
      </form>
    </Form>
        </>
    )
}
export default TransactionForm;