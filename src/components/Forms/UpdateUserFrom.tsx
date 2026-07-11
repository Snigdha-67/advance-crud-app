"use client";

import { formSchema, FormSchemaType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { LoaderIcon, UserRoundPen } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../shadcnui/button";
import { Calendar } from "../shadcnui/calendar";
import { CardContent, CardFooter } from "../shadcnui/card";
import { Field, FieldContent, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../shadcnui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadcnui/select";

const UpdateUserFrom = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm({
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

  const [open, setOpen] = useState(false);
  // const [preview, setPreview] = useState<string | null>(null);

  const createFormHandler = async (cfData: FormSchemaType) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(cfData);

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(createFormHandler)}
      className=""
      noValidate>
      <CardContent className="grid place-items-center gap-2 pb-4">
        <Controller
          name="userImage"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Profile Picture</FieldLabel>
              <Input
                {...field}
                id={field.name}
                className="rounded-xl"
                aria-invalid={fieldState.invalid}
                placeholder="Please upload a image link"
                autoComplete="name"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="userName"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Full Name</FieldLabel>
              <Input
                {...field}
                id={field.name}
                className="rounded-xl"
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your Name"
                autoComplete="name"
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
              <FieldLabel>Email Address</FieldLabel>

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
                type="tel"
                className="rounded-xl"
                aria-invalid={fieldState.invalid}
                placeholder="+91...."
                autoComplete="on"
                onChange={(e) => {
                  const rawValue = e.target.value;
                  const filteredValue = rawValue.replace(/[^0-9+]/g, "");
                  field.onChange(filteredValue);
                }}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <div className="grid w-full grid-cols-2 gap-4">
          <Controller
            name="userGender"
            control={control}
            render={({ field, fieldState }) => (
              <Field
                orientation="responsive"
                data-invalid={fieldState.invalid}>
                <FieldContent>
                  <FieldLabel>Gender</FieldLabel>
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
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Others">Prefer Not To Say</SelectItem>
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="userDob"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Date of Birth</FieldLabel>
                <Popover
                  open={open}
                  onOpenChange={setOpen}>
                  <PopoverTrigger
                    render={
                      <Button
                        variant="secondary"
                        id="date"
                        className="justify-start rounded-xl">
                        {field.value ?
                          format(new Date(field.value), "dd/MM/yyyy")
                        : "Select your DOB"}
                      </Button>
                    }
                  />
                  <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      defaultMonth={field.value}
                      captionLayout="dropdown"
                      onSelect={(selectedDate) => {
                        field.onChange(selectedDate);
                        setOpen(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
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
                className="rounded-xl"
                aria-invalid={fieldState.invalid}
                placeholder="Which State are you From?"
                autoComplete="on"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </CardContent>

      <CardFooter className="pt">
        <Button
          type="submit"
          className={"w-full"}
          disabled={isSubmitting}>
          {isSubmitting ?
            <>
              <LoaderIcon className="animate-spin" /> Updating
            </>
          : <>
              <UserRoundPen /> Update
            </>
          }
        </Button>
      </CardFooter>
    </form>
  );
};

export default UpdateUserFrom;
