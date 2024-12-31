import React from 'react';

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  children: React.ReactNode;
  className?: string;
}

export function Select({ value, onChange, placeholder, children, className = '' }: SelectProps) {
  return (
    <select 
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {children}
    </select>
  );
}

interface OptionProps {
  value: string;
  children: React.ReactNode;
}

export function Option({ value, children }: OptionProps) {
  return <option value={value}>{children}</option>;
}

// 使用示例:
/*
<Select 
  value={selectedValue} 
  onChange={setSelectedValue}
  placeholder="请选择"
>
  <Option value="option1">选项1</Option>
  <Option value="option2">选项2</Option>
</Select>
*/