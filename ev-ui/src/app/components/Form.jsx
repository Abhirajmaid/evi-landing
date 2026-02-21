"use client";

import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      console.error("Error saving lead:", { name: err.name, code: err.code, message: err.message, raw: err });
      setStatus("Error saving — try again");
      setIsSaving(false);
    }
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className="w-full md:min-h-screen min-h-auto py-10 sm:py-12 bg-gradient-to-b from-sky-300 to-white flex justify-center md:items-center items-start px-8">
      <div className="w-full max-w-[480px] h-auto bg-white rounded-[40px] sm:rounded-[50px] p-6 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
        <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <label className="block font-purista text-black text-base sm:text-lg font-semibold mb-0.5">
              First Name
            </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              autoComplete="off"
              className={`font-cerapro w-full border-b border-gray-300 focus:border-black outline-none py-1.5 sm:py-2 transition-colors bg-white text-base sm:text-lg text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:text-black`}
              style={{ color: "black", WebkitTextFillColor: "black" }}
            />
          </div>

          <div className="relative">
            <label className="block font-purista text-black text-base sm:text-lg font-semibold mb-0.5">
              Last Name
            </label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              autoComplete="off"
              className={`font-cerapro w-full border-b border-gray-300 focus:border-black outline-none py-1.5 sm:py-2 transition-colors bg-white text-base sm:text-lg text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:text-black`}
              style={{ color: "black", WebkitTextFillColor: "black" }}
            />
          </div>

          <div className="relative">
            <label className="block font-purista text-black text-base sm:text-lg font-semibold mb-0.5">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              autoComplete="off"
              className={`font-cerapro w-full border-b border-gray-300 focus:border-black outline-none py-1.5 sm:py-2 transition-colors bg-white text-base sm:text-lg text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:text-black`}
              style={{ color: "black", WebkitTextFillColor: "black" }}
            />
          </div>

          <div className="relative">
            <label className="block font-purista text-black text-base sm:text-lg font-semibold mb-0.5">
              Phone Number
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              autoComplete="off"
              className={`font-cerapro w-full border-b border-gray-300 focus:border-black outline-none py-1.5 sm:py-2 transition-colors bg-white text-base sm:text-lg text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:text-black`}
              style={{ color: "black", WebkitTextFillColor: "black" }}
            />
          </div>

          <div className="mt-8 sm:mt-10">
            <button
              type="submit"
              disabled={isSaving}
              className={`font-purista w-full bg-[#005266] text-white py-3.5 sm:py-4 rounded-full text-lg sm:text-xl font-bold tracking-wide hover:bg-[#003d4d] transition-all shadow-md active:scale-[0.98] ${isSaving ? "opacity-60 cursor-wait" : ""}`}
            >
              {isSaving ? "Saving..." : "Submit"}
            </button>
          </div>
        </form>
        {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
      </div>
    </section>
  );
}
