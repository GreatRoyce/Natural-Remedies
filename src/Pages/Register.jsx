import React, { useState } from "react";
import {
  User,
  Leaf,
  Camera,
  Plus,
  Link as LinkIcon,
  ChevronDown,
} from "lucide-react";

function Register() {
  const [role, setRole] = useState("user"); // default role
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    address: "",
    yearsPractice: "",
    specialization: "",
    certifications: "",
    biography: "",
    profilePic: null,
    businessName: "",
    website: "",
    socialPlatform: "",
    socialLink: "",
    referralSource: "", // New field
  });

  const [preview, setPreview] = useState(null); // profile pic preview

  const guideTexts = {
    user: "As a User, you'll gain access to browse remedies, save your favorites, and connect with herbalists for insights.",
    herbalist:
      "As a Herbalist, you'll be able to share remedies, educate users, and showcase your expertise to the community.",
  };

  const referralOptions = [
    "Search Engine (Google, Bing, etc.)",
    "Social Media (Facebook, Instagram, etc.)",
    "Friend or Family Recommendation",
    "Blog or Article",
    "Podcast",
    "YouTube Channel",
    "Health Practitioner Recommendation",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      setFormData({ ...formData, [name]: file });

      // preview selected image
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", { role, ...formData });
    // send to backend API later
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-white to-brand-secondary/10 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-brand-secondary text-white p-6 text-center">
          <div className="flex items-center justify-center mb-2">
            <Leaf className="h-8 w-8 mr-2" />
            <h1 className="text-2xl font-bold">Join Remedies</h1>
          </div>
          <p className="text-brand-clay">Create your account to get started</p>
        </div>

        <div className="p-6">
          {/* Role Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1 mb-6 w-64 mx-auto">
            <button
              onClick={() => setRole("user")}
              type="button"
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                role === "user"
                  ? "bg-white text-brand-clay shadow-sm"
                  : "text-gray-600 hover:text-brand-clay"
              }`}
            >
              <User size={16} className="inline mr-1" /> User
            </button>
            <button
              onClick={() => setRole("herbalist")}
              type="button"
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                role === "herbalist"
                  ? "bg-white text-brand-clay shadow-sm"
                  : "text-gray-600 hover:text-brand-clay"
              }`}
            >
              <Leaf size={16} className="inline mr-1" /> Herbalist
            </button>
          </div>

          {/* Guidance Text */}
          <div className="bg-blue-50 p-4 rounded-lg mb-6 text-center">
            <p className="text-sm text-blue-700">{guideTexts[role]}</p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Compulsory Info */}
            <div className="bg-gray-50 p-5 rounded-lg">
              <h2 className="text-lg font-semibold text-brand-secondary mb-4 flex items-center">
                <span className="bg-brand-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                  1
                </span>
                Basic Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your full name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Username *
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Choose a username"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+234 (701) 234-5678"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent"
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City, Country *
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="e.g. Niamey, Niger"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent"
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Profile Picture */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profile Picture (optional)
                  </label>
                  <div className="flex items-center">
                    <div className="relative mr-4">
                      {preview ? (
                        <img
                          src={preview}
                          alt="Preview"
                          className="h-16 w-16 object-cover rounded-full border-2 border-white shadow"
                        />
                      ) : (
                        <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                          <User size={24} className="text-gray-400" />
                        </div>
                      )}
                      <label
                        htmlFor="profilePic"
                        className="absolute bottom-0 right-0 bg-brand-clay text-white p-1 rounded-full cursor-pointer"
                      >
                        <Camera size={14} />
                        <input
                          id="profilePic"
                          type="file"
                          name="profilePic"
                          accept="image/*"
                          className="hidden"
                          onChange={handleChange}
                        />
                      </label>
                    </div>
                    <span className="text-sm text-gray-500">
                      Click camera to upload
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* How did you hear about us? */}
            <div className="bg-gray-50 p-5 rounded-lg">
              <h2 className="text-lg font-semibold text-brand-secondary mb-4 flex items-center">
                <span className="bg-brand-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                  2
                </span>
                How did you hear about us?
              </h2>
              <div className="relative">
                <select
                  name="referralSource"
                  value={formData.referralSource}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent appearance-none"
                >
                  <option value="">Select an option</option>
                  {referralOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
              {formData.referralSource === "Other" && (
                <div className="mt-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Please specify
                  </label>
                  <input
                    type="text"
                    name="referralOther"
                    placeholder="How did you discover Remedies?"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent"
                    onChange={handleChange}
                  />
                </div>
              )}
            </div>

            {/* Professional Info (Only for Herbalists) */}
            {role === "herbalist" && (
              <div className="bg-gray-50 p-5 rounded-lg">
                <h2 className="text-lg font-semibold text-brand-secondary mb-4 flex items-center">
                  <span className="bg-brand-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                    3
                  </span>
                  Professional Information
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Years of Practice
                    </label>
                    <input
                      type="text"
                      name="yearsPractice"
                      placeholder="e.g. 5 years"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Specialization
                    </label>
                    <input
                      type="text"
                      name="specialization"
                      placeholder="e.g. Herbal Medicine, Ayurveda"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Certifications / Training
                    </label>
                    <input
                      type="text"
                      name="certifications"
                      placeholder="e.g. Certified Herbalist, Traditional Medicine Diploma"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Biography
                    </label>
                    <textarea
                      name="biography"
                      placeholder="Tell us about your background and experience..."
                      rows={3}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* Profile Enhancement (Only for Herbalists) */}
            {role === "herbalist" && (
              <div className="bg-gray-50 p-5 rounded-lg">
                <h2 className="text-lg font-semibold text-brand-secondary mb-4 flex items-center">
                  <span className="bg-brand-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                    4
                  </span>
                  Professional Profile
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business/Clinic Name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      placeholder="e.g. Nature's Healing Clinic"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent"
                      onChange={handleChange}
                    />
                  </div>

                  {/* Social Media Section */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2 items-center">
                      <LinkIcon size={16} className="mr-1" /> Social Media Links
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2 mb-2">
                      <select
                        name="socialPlatform"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent flex-1"
                        onChange={handleChange}
                      >
                        <option value="">Select Platform</option>
                        <option value="facebook">Facebook</option>
                        <option value="instagram">Instagram</option>
                        <option value="twitter">Twitter / X</option>
                        <option value="youtube">YouTube</option>
                        <option value="tiktok">TikTok</option>
                        <option value="linkedin">LinkedIn</option>
                      </select>
                      <input
                        type="text"
                        name="socialLink"
                        placeholder="Profile URL or username"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-clay focus:border-transparent flex-2"
                        onChange={handleChange}
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      You can add more platforms later from your profile
                      settings.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-brand-clay text-white py-3 rounded-lg font-medium hover:bg-brand-secondary transition-all shadow-md hover:shadow-lg"
            >
              Register as {role === "user" ? "User" : "Herbalist"}
            </button>

            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a href="/login" className="text-brand-clay hover:underline">
                Sign in here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
