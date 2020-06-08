import React from 'react';
import { useForm, Controller } from "react-hook-form";

export default function CustomInputSelect(props) {
    return <Controller
      as={props.nodeComponent}
      id={props.nameId}
      name={props.nameId}
      control={props.control}
      required={props.required}
      rules={({ required: props.required })}
      error={props.errors[props.nameId] ? true : false}
    />
  }