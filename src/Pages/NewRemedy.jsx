import React, { useState } from "react";
import { X, Plus, Trash2, Save, AlertCircle } from "lucide-react";

function NewRemedy() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    symptoms: [],
    bodySystems: [],
    remedyType: "",
    ingredients: [{ name: "", quantity: "" }],
    preparation: "",
    usage: "",
    precautions: "",
    approved: false,
  });

  const [currentSymptom, setCurrentSymptom] = useState("");
  const [currentBodySystem, setCurrentBodySystem] = useState("");
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleAddSymptom = () => {
    if (
      currentSymptom.trim() &&
      !formData.symptoms.includes(currentSymptom.trim())
    ) {
      setFormData({
        ...formData,
        symptoms: [...formData.symptoms, currentSymptom.trim()],
      });
      setCurrentSymptom("");
    }
  };

  const handleRemoveSymptom = (index) => {
    const updatedSymptoms = formData.symptoms.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      symptoms: updatedSymptoms,
    });
  };

  const handleAddBodySystem = () => {
    if (
      currentBodySystem.trim() &&
      !formData.bodySystems.includes(currentBodySystem.trim())
    ) {
      setFormData({
        ...formData,
        bodySystems: [...formData.bodySystems, currentBodySystem.trim()],
      });
      setCurrentBodySystem("");
    }
  };

  const handleRemoveBodySystem = (index) => {
    const updatedBodySystems = formData.bodySystems.filter(
      (_, i) => i !== index
    );
    setFormData({
      ...formData,
      bodySystems: updatedBodySystems,
    });
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients[index][field] = value;
    setFormData({
      ...formData,
      ingredients: updatedIngredients,
    });
  };

  const handleAddIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, { name: "", quantity: "" }],
    });
  };

  const handleRemoveIngredient = (index) => {
    if (formData.ingredients.length > 1) {
      const updatedIngredients = formData.ingredients.filter(
        (_, i) => i !== index
      );
      setFormData({
        ...formData,
        ingredients: updatedIngredients,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Remedy title is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (formData.symptoms.length === 0)
      newErrors.symptoms = "At least one symptom is required";
    if (formData.bodySystems.length === 0)
      newErrors.bodySystems = "At least one body system is required";
    if (!formData.remedyType.trim())
      newErrors.remedyType = "Remedy type is required";

    // Check if any ingredient is missing a name
    formData.ingredients.forEach((ingredient, index) => {
      if (!ingredient.name.trim()) {
        newErrors[`ingredient-${index}`] = "Ingredient name is required";
      }
    });

    if (!formData.preparation.trim())
      newErrors.preparation = "Preparation instructions are required";
    if (!formData.usage.trim())
      newErrors.usage = "Usage instructions are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Here you would typically send the data to your backend API
      alert(
        "Remedy submitted successfully! It will be reviewed before publishing."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-brand-secondary text-white p-6">
          <h1 className="text-2xl font-bold">Create New Remedy</h1>
          <p className="text-brand-primary">
            Share your herbal knowledge with the community
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Remedy Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., Turmeric Anti-Inflammatory Tonic"
              className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle size={14} className="mr-1" /> {errors.title}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              placeholder="Describe the remedy, its traditional uses, and benefits..."
              className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle size={14} className="mr-1" /> {errors.description}
              </p>
            )}
          </div>

          {/* Symptoms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Symptoms Addressed *
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={currentSymptom}
                onChange={(e) => setCurrentSymptom(e.target.value)}
                placeholder="e.g., Headache, Inflammation"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent"
              />
              <button
                type="button"
                onClick={handleAddSymptom}
                className="bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 flex items-center"
              >
                <Plus size={16} className="mr-1" /> Add
              </button>
            </div>
            {errors.symptoms && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle size={14} className="mr-1" /> {errors.symptoms}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.symptoms.map((symptom, index) => (
                <span
                  key={index}
                  className="bg-brand-primary/10 text-brand-secondary px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {symptom}
                  <button
                    type="button"
                    onClick={() => handleRemoveSymptom(index)}
                    className="ml-1 text-red-500 hover:text-red-700"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Body Systems */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Body Systems Affected *
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={currentBodySystem}
                onChange={(e) => setCurrentBodySystem(e.target.value)}
                placeholder="e.g., Digestive, Immune"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent"
              />
              <button
                type="button"
                onClick={handleAddBodySystem}
                className="bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 flex items-center"
              >
                <Plus size={16} className="mr-1" /> Add
              </button>
            </div>
            {errors.bodySystems && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle size={14} className="mr-1" /> {errors.bodySystems}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.bodySystems.map((system, index) => (
                <span
                  key={index}
                  className="bg-brand-accent/20 text-brand-secondary px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {system}
                  <button
                    type="button"
                    onClick={() => handleRemoveBodySystem(index)}
                    className="ml-1 text-red-500 hover:text-red-700"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Remedy Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Remedy Type *
            </label>
            <select
              name="remedyType"
              value={formData.remedyType}
              onChange={handleInputChange}
              className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent ${
                errors.remedyType ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select a type</option>
              <option value="Tea">Tea/Infusion</option>
              <option value="Tincture">Tincture</option>
              <option value="Salve">Salve/Ointment</option>
              <option value="Poultice">Poultice</option>
              <option value="Essential Oil">Essential Oil</option>
              <option value="Capsule">Capsule</option>
              <option value="Syrup">Syrup</option>
              <option value="Other">Other</option>
            </select>
            {errors.remedyType && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle size={14} className="mr-1" /> {errors.remedyType}
              </p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ingredients *
            </label>
            {formData.ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3"
              >
                <div className="md:col-span-2">
                  <input
                    type="text"
                    value={ingredient.name}
                    onChange={(e) =>
                      handleIngredientChange(index, "name", e.target.value)
                    }
                    placeholder="Ingredient name"
                    className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent ${
                      errors[`ingredient-${index}`]
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {errors[`ingredient-${index}`] && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle size={14} className="mr-1" />{" "}
                      {errors[`ingredient-${index}`]}
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={ingredient.quantity}
                    onChange={(e) =>
                      handleIngredientChange(index, "quantity", e.target.value)
                    }
                    placeholder="Quantity (e.g., 1 tsp)"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent"
                  />
                  {formData.ingredients.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveIngredient(index)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 size={18} />
                    </button>
                  )}
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddIngredient}
              className="flex items-center text-brand-clay hover:text-brand-secondary mt-2"
            >
              <Plus size={16} className="mr-1" /> Add another ingredient
            </button>
          </div>

          {/* Preparation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preparation Instructions *
            </label>
            <textarea
              name="preparation"
              value={formData.preparation}
              onChange={handleInputChange}
              rows={3}
              placeholder="Step-by-step instructions for preparing the remedy..."
              className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent ${
                errors.preparation ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.preparation && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle size={14} className="mr-1" /> {errors.preparation}
              </p>
            )}
          </div>

          {/* Usage */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Usage Instructions *
            </label>
            <textarea
              name="usage"
              value={formData.usage}
              onChange={handleInputChange}
              rows={3}
              placeholder="How to use the remedy, dosage, frequency..."
              className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent ${
                errors.usage ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.usage && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle size={14} className="mr-1" /> {errors.usage}
              </p>
            )}
          </div>

          {/* Precautions */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Precautions & Contraindications
            </label>
            <textarea
              name="precautions"
              value={formData.precautions}
              onChange={handleInputChange}
              rows={3}
              placeholder="Any safety precautions, side effects, or contraindications..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent"
            />
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-brand-clay text-white rounded-lg hover:bg-opacity-90 flex items-center"
            >
              <Save size={18} className="mr-2" />
              Submit Remedy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewRemedy;
