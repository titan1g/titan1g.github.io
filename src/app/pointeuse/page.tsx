"use client";

import PageLayout from "@/components/PageLayout";
import { useState } from "react";

const employeeData = [
  { id: "01", name: "", hours: "00:00:00", salary: "$0" },
  { id: "02", name: "", hours: "00:00:00", salary: "$0" },
  { id: "03", name: "", hours: "00:00:00", salary: "$0" },
  { id: "04", name: "", hours: "00:00:00", salary: "$0" },
  { id: "05", name: "SHF - James Crowley", hours: "00:00:00", salary: "$30,000,000" },
  { id: "06", name: "", hours: "00:00:00", salary: "$0" },
  { id: "07", name: "", hours: "00:00:00", salary: "$0" },
  { id: "08", name: "CDT - Noelio Walker", hours: "05:51:00", salary: "$5,612,500" },
  { id: "09", name: "1CL-M - Jean Jefferson", hours: "12:30:00", salary: "$14,575,000" },
  { id: "10", name: "CDT - Thomas Delacourt", hours: "00:00:00", salary: "$0" },
  { id: "11", name: "", hours: "00:00:00", salary: "$0" },
  { id: "12", name: "", hours: "00:00:00", salary: "$0" },
  { id: "13", name: "1CL-M - Jacky Baknor", hours: "00:00:00", salary: "$0" },
  { id: "14", name: "CDT - William Scott", hours: "11:52:00", salary: "$10,125,000" },
  { id: "15", name: "", hours: "00:00:00", salary: "$0" },
  { id: "16", name: "CDT - Yuri Kavinsky", hours: "12:00:00", salary: "$11,287,500" },
  { id: "17", name: "CDT - Shag Djones", hours: "06:45:00", salary: "$6,687,500" },
  { id: "18", name: "CDT - Curtis Brooks", hours: "00:00:00", salary: "$0" },
  { id: "19", name: "", hours: "00:00:00", salary: "$0" },
  { id: "20", name: "CDT - Guillaume Leblanc", hours: "06:13:00", salary: "$5,225,000" },
  { id: "21", name: "", hours: "00:00:00", salary: "$0" },
  { id: "22", name: "", hours: "00:00:00", salary: "$0" },
  { id: "23", name: "", hours: "00:00:00", salary: "$0" },
  { id: "24", name: "1CL-M - Larry Warner", hours: "00:00:00", salary: "$2,500,000" },
  { id: "25", name: "CDT - Jackson Cocu", hours: "00:00:00", salary: "$0" },
  { id: "26", name: "", hours: "00:00:00", salary: "$0" },
  { id: "27", name: "", hours: "00:00:00", salary: "$0" },
  { id: "28", name: "SGT-M - Samuel Winston", hours: "00:00:00", salary: "$4,000,000" },
  { id: "29", name: "", hours: "00:00:00", salary: "$0" },
  { id: "30", name: "", hours: "00:00:00", salary: "$0" },
];

const matricules = [
  "Sélectionner...",
  "01 - Deputy",
  "02 - Deputy",
  "03 - Deputy",
  "04 - Deputy",
  "05 - SHF - James Crowley",
  "06 - Deputy",
  "07 - Deputy",
  "08 - CDT - Noelio Walker",
  "09 - 1CL-M - Jean Jefferson",
  "10 - CDT - Thomas Delacourt",
];

const gavOptions = ["Sélectionner...", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const supervisionOptions = ["Sélectionner...", "0", "1", "2", "3", "4", "5"];
const formationOptions = ["Sélectionner...", "0", "1", "2", "3"];
const permanenceOptions = ["Sélectionner...", "0", "1", "2", "3", "4", "5"];
const negociationOptions = ["Sélectionner...", "0", "1", "2", "3"];
const leadOpeOptions = ["Sélectionner...", "0", "1", "2", "3"];
const ticketOPJOptions = ["Sélectionner...", "0", "1", "2", "3", "4", "5"];
const ticketScientifiqueOptions = ["Sélectionner...", "0", "1", "2", "3", "4", "5"];

export default function PointeusePage() {
  const [formData, setFormData] = useState({
    matricule: "",
    dateService: "",
    heureDebut: "",
    heureFin: "",
    nombreGAV: "",
    nombreSupervision: "",
    nombreFormation: "",
    nombrePermanence: "",
    nombreNegociation: "",
    nombreLeadOpe: "",
    ticketOPJ: "",
    ticketScientifique: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Formulaire soumis avec succès!");
  };

  const handleClear = () => {
    setFormData({
      matricule: "",
      dateService: "",
      heureDebut: "",
      heureFin: "",
      nombreGAV: "",
      nombreSupervision: "",
      nombreFormation: "",
      nombrePermanence: "",
      nombreNegociation: "",
      nombreLeadOpe: "",
      ticketOPJ: "",
      ticketScientifique: "",
    });
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://ext.same-assets.com/482647744/2305044275.png"
            alt="LSSD Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wider drop-shadow-lg">
            Pointeuse
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#f5f3ed] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="border-l-4 border-[#c9a227] pl-4 mb-6">
                <h2 className="text-2xl font-bold text-[#374127]">Pointeuse / Paie</h2>
                <p className="text-gray-500 text-sm mt-1">
                  <span className="text-red-500">*</span> Indique un champ obligatoire
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Matricule */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Votre matricule <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="matricule"
                    value={formData.matricule}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4a5a3c] focus:border-transparent"
                    required
                  >
                    {matricules.map((option) => (
                      <option key={option} value={option === "Sélectionner..." ? "" : option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date de service */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Date de service <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="dateService"
                    value={formData.dateService}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4a5a3c] focus:border-transparent"
                    required
                  />
                </div>

                {/* Heure de prise de service */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Heure de prise de service <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    name="heureDebut"
                    value={formData.heureDebut}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4a5a3c] focus:border-transparent"
                    required
                  />
                </div>

                {/* Heure de fin de service */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Heure de fin de service <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    name="heureFin"
                    value={formData.heureFin}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4a5a3c] focus:border-transparent"
                    required
                  />
                </div>

                {/* Nombre de GAV */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nombre de GAV
                  </label>
                  <select
                    name="nombreGAV"
                    value={formData.nombreGAV}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4a5a3c] focus:border-transparent"
                  >
                    {gavOptions.map((option) => (
                      <option key={option} value={option === "Sélectionner..." ? "" : option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Nombre de supervision */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nombre de supervision
                  </label>
                  <select
                    name="nombreSupervision"
                    value={formData.nombreSupervision}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4a5a3c] focus:border-transparent"
                  >
                    {supervisionOptions.map((option) => (
                      <option key={option} value={option === "Sélectionner..." ? "" : option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Nombre de formation/recrutement */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nombre de formation/recrutement
                  </label>
                  <select
                    name="nombreFormation"
                    value={formData.nombreFormation}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4a5a3c] focus:border-transparent"
                  >
                    {formationOptions.map((option) => (
                      <option key={option} value={option === "Sélectionner..." ? "" : option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Nombre de permanence/RH */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nombre de permanence/RH (1h)
                  </label>
                  <select
                    name="nombrePermanence"
                    value={formData.nombrePermanence}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4a5a3c] focus:border-transparent"
                  >
                    {permanenceOptions.map((option) => (
                      <option key={option} value={option === "Sélectionner..." ? "" : option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Nombre de Négociation */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nombre de Négociation
                  </label>
                  <select
                    name="nombreNegociation"
                    value={formData.nombreNegociation}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4a5a3c] focus:border-transparent"
                  >
                    {negociationOptions.map((option) => (
                      <option key={option} value={option === "Sélectionner..." ? "" : option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Nombre de Lead Opé */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nombre de Lead Opé
                  </label>
                  <select
                    name="nombreLeadOpe"
                    value={formData.nombreLeadOpe}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4a5a3c] focus:border-transparent"
                  >
                    {leadOpeOptions.map((option) => (
                      <option key={option} value={option === "Sélectionner..." ? "" : option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Ticket OPJ */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Ticket OPJ
                  </label>
                  <select
                    name="ticketOPJ"
                    value={formData.ticketOPJ}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4a5a3c] focus:border-transparent"
                  >
                    {ticketOPJOptions.map((option) => (
                      <option key={option} value={option === "Sélectionner..." ? "" : option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Ticket Scientifique */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Ticket Scientifique
                  </label>
                  <select
                    name="ticketScientifique"
                    value={formData.ticketScientifique}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4a5a3c] focus:border-transparent"
                  >
                    {ticketScientifiqueOptions.map((option) => (
                      <option key={option} value={option === "Sélectionner..." ? "" : option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-[#4a5a3c] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#374127] transition-colors"
                  >
                    Soumettre
                  </button>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="flex-1 bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Effacer
                  </button>
                </div>
              </form>
            </div>

            {/* Salary Table Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 overflow-hidden">
              <div className="border-l-4 border-[#c9a227] pl-4 mb-6">
                <h2 className="text-2xl font-bold text-[#374127]">Salaire : Heures pointées</h2>
              </div>

              <div className="overflow-x-auto max-h-[800px] overflow-y-auto">
                <table className="w-full border-collapse">
                  <thead className="sticky top-0 bg-[#4a5a3c] text-white">
                    <tr>
                      <th className="py-3 px-4 text-left font-semibold">ID / Nom</th>
                      <th className="py-3 px-4 text-center font-semibold">Heure effectuée</th>
                      <th className="py-3 px-4 text-right font-semibold">Salaire</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeeData.map((employee, index) => (
                      <tr
                        key={employee.id}
                        className={`border-b border-gray-200 ${
                          employee.name ? "bg-pink-50" : index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        } hover:bg-gray-100 transition-colors`}
                      >
                        <td className="py-2 px-4 text-sm">
                          {employee.name ? (
                            <span className="font-medium text-[#374127]">
                              {employee.id} - {employee.name}
                            </span>
                          ) : (
                            <span className="text-gray-400">{employee.id}</span>
                          )}
                        </td>
                        <td className="py-2 px-4 text-center text-sm text-gray-600">
                          {employee.hours}
                        </td>
                        <td className={`py-2 px-4 text-right text-sm font-medium ${
                          employee.salary !== "$0" ? "text-[#3d8b40]" : "text-gray-400"
                        }`}>
                          {employee.salary}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-4 bg-[#f5f3ed] rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  Tableau mis à jour automatiquement. Les salaires sont calculés en fonction des heures pointées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
