import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

// 完整的省份列表
const provinceOptions = [
  "北京", "上海", "天津", "重庆",
  "河北", "山西", "辽宁", "吉林", "黑龙江",
  "江苏", "浙江", "安徽", "福建", "江西", "山东",
  "河南", "湖北", "湖南", "广东", "海南",
  "四川", "贵州", "云南", "陕西", "甘肃",
  "青海", "台湾", "内蒙古", "广西", "西藏",
  "宁夏", "新疆", "香港", "澳门"
];

// 年龄范围限制
// const ageRange = {
//   min: 16,
//   max: 35
// };

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    province: '',
    contact: '',
    talent: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // 在这里添加表单提交逻辑
  };

  return (
    <section id="contact" data-scroll-section className="relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />

      <div
        data-scroll
        data-scroll-speed=".4"
        data-scroll-position="top"
        className="relative mx-auto max-w-6xl px-4 py-16"
      >
        {/* 主标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <span className="text-sm font-medium text-primary/80 mb-2">JOIN US</span>
          <h2 className="text-4xl font-medium tracking-tight xl:text-6xl">
            Talent <span className="text-gradient clash-grotesk">主播招募</span>
          </h2>
          <p className="mt-4 text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            你只管绽放，其他的都交给我！
          </p>
          <p className="mt-2 text-base text-muted-foreground max-w-lg">
            加入迈之文化，我们将为你提供专业的培训体系、完善的运营策略和广阔的发展平台
          </p>
        </motion.div>

        {/* 表单部分 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-white/[0.03] to-transparent rounded-xl p-8 backdrop-blur-sm border border-white/5 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-1.5 block text-primary/90">姓名</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="请输入真实姓名"
                  className="bg-white/5 border-white/10 h-12 placeholder:text-white/30 font-medium"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block text-primary/90">性别</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="flex h-12 w-full rounded-md border border-white/10 bg-white/5 px-4 py-2 text-base font-medium ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 placeholder:text-white/30"
                >
                  <option value="">请选择性别</option>
                  <option value="male">男</option>
                  <option value="female">女</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block text-primary/90">年龄</label>
                <Input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder={`请输入年龄`}
                  className="bg-white/5 border-white/10 h-12 placeholder:text-white/30 font-medium"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-1.5 block text-primary/90">所在省份</label>
                <select
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  className="flex h-12 w-full rounded-md border border-white/10 bg-white/5 px-4 py-2 text-base font-medium ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 placeholder:text-white/30"
                >
                  <option value="">请选择省份</option>
                  {provinceOptions.map(province => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block text-primary/90">联系方式</label>
                <Input
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="请输入手机号码"
                  className="bg-white/5 border-white/10 h-12 placeholder:text-white/30 font-medium"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block text-primary/90">才艺特长</label>
                <Input
                  name="talent"
                  value={formData.talent}
                  onChange={handleChange}
                  placeholder="请简述您的才艺特长"
                  className="bg-white/5 border-white/10 h-12 placeholder:text-white/30 font-medium"
                />
              </div>
            </div>
          </div>

          {/* 提交按钮 */}
          <motion.div
            className="flex justify-center mt-10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              onClick={handleSubmit}
              className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-white px-12 py-6 text-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary/20"
            >
              立即提交
            </Button>
          </motion.div>

          {/* 温馨提示 */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            提交即代表您同意我们的服务条款和隐私政策
          </p>
        </motion.div>
      </div>
    </section>
  );
}