"use client";

import { EcommerceTemplateProps } from "@/templates/EcommerceTemplate";
import { useState, useEffect } from "react";

interface EditingPanelProps extends Omit<EcommerceTemplateProps, "showDownload"> {
  onChange: (updatedData: EcommerceTemplateProps) => void;
}

const EditingPanel: React.FC<EditingPanelProps> = ({ title, subtitle, brand_name, about, cta, address, contactNo, email, heroImages, featureImages, bestSellingImages, brands, onChange }) => {
  const [formData, setFormData] = useState<EcommerceTemplateProps>({
    title,
    subtitle,
    brand_name,
    about,
    cta,
    address,
    contactNo,
    email,
    showDownload: true,
    heroImages,
    featureImages,
    bestSellingImages,
    brands,
  });

  useEffect(() => {
    setFormData({
      title,
      subtitle,
      brand_name,
      about,
      cta,
      address,
      contactNo,
      email,
      showDownload: true,
      heroImages,
      featureImages,
      bestSellingImages,
      brands,
    });
  }, [title, subtitle, brand_name, about, cta, address, contactNo, email, heroImages, featureImages, bestSellingImages, brands]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number, arrayField?: keyof EcommerceTemplateProps) => {
    const { name, type, value, checked } = e.target;
    const updatedValue = type === "checkbox" ? checked : value;

    if (typeof index === "number" && arrayField) {
      const updatedArray = [...(formData[arrayField] as string[])];
      updatedArray[index] = updatedValue;
      setFormData((prev) => {
        const updated = { ...prev, [arrayField]: updatedArray };
        onChange(updated);
        return updated;
      });
    } else {
      const updatedForm = {
        ...formData,
        [name]: updatedValue,
      };
      setFormData(updatedForm);
      onChange(updatedForm);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, field: keyof EcommerceTemplateProps) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newImageURLs = Array.from(files).map((file) => URL.createObjectURL(file));

    // Check if the field is one of the image array fields
    const validImageFields: (keyof EcommerceTemplateProps)[] = ["heroImages", "featureImages", "bestSellingImages"];

    if (!validImageFields.includes(field)) {
      console.error(`${field} is not a valid image array field`);
      return;
    }

    const existingArray = (formData[field] as string[]) ?? [];

    const updatedImages = [...existingArray, ...newImageURLs];

    const updatedForm: EcommerceTemplateProps = {
      ...formData,
      [field]: updatedImages,
    };

    setFormData(updatedForm);
    onChange(updatedForm);
  };

  const renderArrayInputs = (array: string[], fieldName: keyof EcommerceTemplateProps, label: string) => (
    <div className="mb-4">
      <label className="block font-semibold mb-1">{label}</label>
      <input type="file" multiple accept="image/*" onChange={(e) => handleFileUpload(e, fieldName)} className="mb-2" />
      <div className="grid grid-cols-2 gap-2">
        {array.map((url, idx) => (
          <img key={idx} src={url} alt={`uploaded-${idx}`} className="w-full h-32 object-cover rounded border" />
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6 p-6 bg-white shadow rounded-lg text-black">
      {/* Hero Section */}
      <h2 className="text-xl font-bold">Hero Section</h2>
      {renderArrayInputs(formData.heroImages ?? [], "heroImages", "Carousel Images")}
      <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="w-full border border-gray-300 rounded-md px-3 py-2" />
      <input type="text" name="subtitle" value={formData.subtitle} onChange={handleChange} placeholder="Subtitle" className="w-full border border-gray-300 rounded-md px-3 py-2" />
      <input type="text" name="brand_name" value={formData.brand_name} onChange={handleChange} placeholder="Brand Name" className="w-full border border-gray-300 rounded-md px-3 py-2" />

      {/* Feature Section */}
      <h2 className="text-xl font-bold mt-4">Feature Section</h2>
      {renderArrayInputs(formData.featureImages ?? [], "featureImages", "Feature Images")}

      {/* Best Selling Section */}
      <h2 className="text-xl font-bold mt-4">Best Selling Section</h2>
      {renderArrayInputs(formData.bestSellingImages ?? [], "bestSellingImages", "Best Selling Images")}

      {/* Brands Section */}
      <h2 className="text-xl font-bold mt-4">Brands</h2>
      {renderArrayInputs(formData.brands ?? [], "brands", "Brand Names")}

      {/* Footer Section */}
      <h2 className="text-xl font-bold mt-4">Footer Section</h2>
      <textarea name="about" value={formData.about} onChange={handleChange} placeholder="About" className="w-full border border-gray-300 rounded-md px-3 py-2" />
      <input type="text" name="cta" value={formData.cta} onChange={handleChange} placeholder="CTA" className="w-full border border-gray-300 rounded-md px-3 py-2" />
      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="w-full border border-gray-300 rounded-md px-3 py-2" />
      <input type="text" name="contactNo" value={formData.contactNo} onChange={handleChange} placeholder="Contact Number" className="w-full border border-gray-300 rounded-md px-3 py-2" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full border border-gray-300 rounded-md px-3 py-2" />
    </div>
  );
};

export default EditingPanel;
