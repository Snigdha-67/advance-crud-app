"use client";
import { formSchema, FormSchemaType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldContent, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadcnui/select";

const CreateUserForm = () => {
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      userEmail: "",
      userPhNo: "",
      userImage: "",
      userGender: "",
      userState: "",
      userDob: undefined,
    },
    mode: "all",
  });

  const createFormHandler = (cfData: FormSchemaType) => {
    console.log(cfData);
  };

  return (
    <form
      onSubmit={handleSubmit(createFormHandler)}
      className="grid place-items-center space-y-2"
      noValidate>
      <Controller
        name="userName"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
          <FieldLabel>
            Full Name
          </FieldLabel>
            <Input
              {...field}
              id={field.name}
              className="rounded-xl"
              aria-invalid={fieldState.invalid}
              placeholder="Name"
              autoComplete="on"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="userEmail"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
             <FieldLabel>
            Email Address
          </FieldLabel>
            
            <Input
              {...field}
              id={field.name}
              type="email"
              className="rounded-xl"
              aria-invalid={fieldState.invalid}
              placeholder="xyz@gamil.com"
              autoComplete="on"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="userPhNo"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Phone Number</FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="number"
              className="rounded-xl"
              aria-invalid={fieldState.invalid}
              placeholder="+91...."
              autoComplete="on"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      
      
      <div className=" grid gap-2 grid-cols-2 ">
      <Controller
        name="userGender"
        control={control}
        render={({ field, fieldState }) => (
          <Field
          orientation="responsive"
          data-invalid={fieldState.invalid}>
            <FieldContent>
              <FieldLabel>Gender</FieldLabel>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
            <Select
              name={field.name}
              value={field.value}
              onValueChange={field.onChange}>
              <SelectTrigger
                id="form-rhf-select-language"
                aria-invalid={fieldState.invalid}
                className="min-w-30 rounded-xl">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Others">Prefer Not To Say</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        )}
        />
        <Controller
        name="userPhNo"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Date of Birth</FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="number"
              className="rounded-xl"
              aria-invalid={fieldState.invalid}
              placeholder="dd/mm/yy"
              autoComplete="on"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />      
              </div>
     


 
       <Controller
        name="userState"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>State</FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="number"
              className="rounded-xl"
              aria-invalid={fieldState.invalid}
              placeholder="Which State are you From?"
              autoComplete="on"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />




    </form>
  );
};

export default CreateUserForm;
