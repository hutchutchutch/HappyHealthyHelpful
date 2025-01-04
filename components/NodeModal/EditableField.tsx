"use client";

import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface EditableFieldProps {
  value: string;
  isEditing: boolean;
  isMultiline?: boolean;
  className?: string;
  onChange: (value: string) => void;
}

export function EditableField({ value, isEditing, isMultiline, className = "", onChange }: EditableFieldProps) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  if (!isEditing) {
    return <div className={className}>{value}</div>;
  }

  if (isMultiline) {
    return (
      <Textarea
        value={localValue}
        onChange={(e) => {
          setLocalValue(e.target.value);
          onChange(e.target.value);
        }}
        className={`bg-background border-white/20 text-white ${className}`}
      />
    );
  }

  return (
    <Input
      value={localValue}
      onChange={(e) => {
        setLocalValue(e.target.value);
        onChange(e.target.value);
      }}
      className={`bg-background border-white/20 text-white ${className}`}
    />
  );
}