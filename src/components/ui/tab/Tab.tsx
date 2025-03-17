import React, { useState } from "react";

const demandes = [
    { id: 1, nom: "HEYBA FOUNDA", type: "Tech", secteur: "SPORT", localisation: "DAKAR - SN", montant: "3.000.000 XFO", statut: "validée" },
    { id: 2, nom: "SARLIGAL SA", type: "Association", secteur: "SPORT", localisation: "DAKAR - SN", montant: "4.000.000 XFO", statut: "prévalidée" },
    { id: 3, nom: "RAMOS COMP", type: "Immobilier", secteur: "SPORT", localisation: "DAKAR - SN", montant: "3.000.000 XFO", statut: "validée" },
    { id: 4, nom: "FALOU TRANS", type: "Transport", secteur: "SPORT", localisation: "DAKAR - SN", montant: "3.000.000 XFO", statut: "validée" },
    { id: 5, nom: "Optique Vision", type: "Voyage", secteur: "SPORT", localisation: "DAKAR - SN", montant: "3.000.000 XFO", statut: "prévalidée" },
    { id: 6, nom: "Octogone", type: "Sport", secteur: "SPORT", localisation: "DAKAR - SN", montant: "3.000.000 XFO", statut: "prévalidée" },
    { id: 7, nom: "Service Matters", type: "Circuit", secteur: "SPORT", localisation: "DAKAR - SN", montant: "3.000.000 XFO", statut: "validée" },
];

const TableComponent = () => {
    const [filter, setFilter] = useState("validée"); // État du filtre
    const [currentPage, setCurrentPage] = useState(1); // Page actuelle
    const itemsPerPage = 5; // Nombre d'éléments par page

    // Filtrer les données selon la sélection
    const filteredData = demandes.filter((item) => item.statut === filter);

    // Pagination : obtenir les éléments de la page actuelle
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    // Nombre total de pages
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <div className="p-5 bg-white shadow-lg rounded-lg">
            {/* Boutons de filtre */}
            <div className="flex space-x-4 mb-4">
                <button
                    className={`px-4 py-2 rounded-lg font-semibold ${filter === "prévalidée" ? "bg-green-500 text-white" : "bg-gray-200"}`}
                    onClick={() => { setFilter("prévalidée"); setCurrentPage(1); }}
                >
                    📝 Demandes Prévalidées
                </button>
                <button
                    className={`px-4 py-2 rounded-lg font-semibold ${filter === "validée" ? "bg-green-500 text-white" : "bg-gray-200"}`}
                    onClick={() => { setFilter("validée"); setCurrentPage(1); }}
                >
                    ✅ Demandes Validées
                </button>
            </div>

            {/* Tableau */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200">
                    <thead className="bg-green-100">
                        <tr className="text-left">
                            <th className="p-2 border">Nom</th>
                            <th className="p-2 border">Type d’organisation</th>
                            <th className="p-2 border">Secteur</th>
                            <th className="p-2 border">Localisation</th>
                            <th className="p-2 border">Montant</th>
                            <th className="p-2 border">Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.length > 0 ? (
                            currentData.map((item) => (
                                <tr key={item.id} className="text-center">
                                    <td className="p-2 border">{item.nom}</td>
                                    <td className="p-2 border">{item.type}</td>
                                    <td className="p-2 border">{item.secteur}</td>
                                    <td className="p-2 border">{item.localisation}</td>
                                    <td className="p-2 border">{item.montant}</td>
                                    <td className="p-2 border">
                                        {item.statut === "validée" ? (
                                            <span className="text-green-600 text-xl">✅</span>
                                        ) : (
                                            <span className="text-red-600 text-xl">❌</span>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className="text-center p-3">Aucune donnée disponible</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-4 space-x-2">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`px-3 py-1 rounded-lg ${currentPage === index + 1 ? "bg-green-500 text-white" : "bg-gray-200"}`}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TableComponent;
