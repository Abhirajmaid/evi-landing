"use client";

import React, { useState } from "react";
import { stylizeSymbols } from "../../lib/stylizeSymbols";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic client-side validation to improve UX
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Enter a valid email";
    if (!/^[0-9+\-\s()]{7,}$/.test(phone)) newErrors.phone = "Enter a valid phone";
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      setStatus("Please correct the highlighted fields");
      setTimeout(() => setStatus(""), 3000);
      return;
    }
    setErrors({});
    setStatus("Saving...");
    setIsSaving(true);
    try {
      await addDoc(collection(db, "leads"), {
        firstName,
        lastName,
        email,
        phone,
        createdAt: serverTimestamp(),
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setStatus("Saved ✅");
      setIsSaving(false);
    } catch (err) {
      // Log structured error information to help debugging (network / permission / extension)
      console.error("Error saving lead:", {
        name: err.name,
        code: err.code,
        message: err.message,
        raw: err,
      });
      setStatus("Error saving — try again");
      setIsSaving(false);
    }
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className="w-full md:min-h-screen min-h-auto py-10 sm:py-12 bg-gradient-to-b from-[#00586D] to-white flex justify-center md:items-center items-start px-8">
      <div className="w-full max-w-[480px] h-auto bg-white rounded-[40px] sm:rounded-[50px] p-6 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
        <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit} noValidate>
          <div className="relative">
            <label htmlFor="firstName" className="block font-purista text-gray-800 text-sm sm:text-base font-semibold mb-2">
              First Name
            </label>
            <input
              id="firstName"
              aria-required="true"
              aria-invalid={errors.firstName ? "true" : "false"}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              autoComplete="given-name"
              placeholder="e.g., John"
              className={`font-cerapro w-full rounded-lg border ${errors.firstName ? "border-red-400" : "border-gray-200"} bg-gray-50 py-3 px-4 text-base sm:text-lg text-gray-900 placeholder-gray-400 placeholder:font-mono focus:outline-none focus:ring-2 focus:ring-[#00586D] transition`}
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
          </div>

          <div className="relative">
            <label htmlFor="lastName" className="block font-purista text-gray-800 text-sm sm:text-base font-semibold mb-2">
              Last Name
            </label>
            <input
              id="lastName"
              aria-required="true"
              aria-invalid={errors.lastName ? "true" : "false"}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              autoComplete="family-name"
              placeholder="e.g., Doe"
              className={`font-cerapro w-full rounded-lg border ${errors.lastName ? "border-red-400" : "border-gray-200"} bg-gray-50 py-3 px-4 text-base sm:text-lg text-gray-900 placeholder-gray-400 placeholder:font-mono focus:outline-none focus:ring-2 focus:ring-[#00586D] transition`}
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
          </div>

          <div className="relative">
            <label htmlFor="email" className="block font-purista text-gray-800 text-sm sm:text-base font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              className={`font-cerapro w-full rounded-lg border ${errors.email ? "border-red-400" : "border-gray-200"} bg-gray-50 py-3 px-4 text-base sm:text-lg text-gray-900 placeholder-gray-400 placeholder:font-mono focus:outline-none focus:ring-2 focus:ring-[#00586D] transition`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div className="relative">
            <label htmlFor="phone" className="block font-purista text-gray-800 text-sm sm:text-base font-semibold mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              aria-required="true"
              aria-invalid={errors.phone ? "true" : "false"}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              autoComplete="tel"
              placeholder="+91 91234 56789"
              className={`font-cerapro w-full rounded-lg border ${errors.phone ? "border-red-400" : "border-gray-200"} bg-gray-50 py-3 px-4 text-base sm:text-lg text-gray-900 placeholder-gray-400 placeholder:font-mono focus:outline-none focus:ring-2 focus:ring-[#00586D] transition`}
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>

          <div className="mt-8 sm:mt-10">
            <button
              type="submit"
              disabled={isSaving}
              aria-busy={isSaving}
              className={`font-purista w-full bg-[#00586D] text-white py-3.5 sm:py-4 rounded-full text-lg sm:text-xl font-bold tracking-wide hover:bg-[#00484f] transition-all shadow-md active:scale-[0.98] ${isSaving ? "opacity-60 cursor-wait" : ""}`}
            >
              {isSaving ? "Saving..." : "Submit"}
            </button>
          </div>
        </form>
        {status && <p className="mt-4 text-sm text-gray-700">{stylizeSymbols(status)}</p>}
      </div>
    </section>
  );
}
