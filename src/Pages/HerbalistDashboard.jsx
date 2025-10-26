import React, { useState } from "react";
import {
  Search,
  Book,
  Notebook,
  Compass,
  Settings,
  LogOut,
  Users,
  BarChart3,
  Calendar,
  MessageSquare,
  Star,
  TrendingUp,
  PlusCircle,
  Eye,
  Edit3,
  Bell
} from "lucide-react";
import { Link } from "react-router-dom";

function HerbalistDashboard() {
  const [activeSection, setActiveSection] = useState("overview");
  const [notifications, setNotifications] = useState(3);

  // Sample data
  const recentRemedies = [
    { id: 1, name: "Turmeric Anti-Inflammatory", views: 124, saves: 42, status: "published" },
    { id: 2, name: "Ginger Digestive Aid", views: 87, saves: 31, status: "published" },
    { id: 3, name: "Lavender Sleep Tonic", views: 56, saves: 18, status: "draft" }
  ];

  const upcomingConsultations = [
    { id: 1, client: "Ifechukwu Abisoye", time: "Today, 2:30 PM", type: "Follow-up" },
    { id: 2, client: "Engr. Marius Izuchi", time: "Tomorrow, 10:00 AM", type: "Initial" }
  ];

  const stats = {
    totalRemedies: 24,
    totalClients: 42,
    avgRating: 4.7,
    monthlyViews: 1248
  };

  return (
    <div className="flex  h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-secondary pt-[10vh] text-white flex flex-col p-4">
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 rounded-full bg-brand-clay flex items-center justify-center text-white font-bold mr-2">
            H
          </div>
          <h1 className="text-xl font-bold">Herbalist Hub</h1>
        </div>
        
        <nav className="space-y-1 flex-1">
          {[
            { id: "overview", label: "Overview", icon: <BarChart3 size={20} /> },
            { id: "remedies", label: "My Remedies", icon: <Book size={20} /> },
            { id: "clients", label: "Clients", icon: <Users size={20} /> },
            { id: "consultations", label: "Consultations", icon: <Calendar size={20} /> },
            { id: "messages", label: "Messages", icon: <MessageSquare size={20} /> },
            { id: "discovery", label: "Discovery", icon: <Compass size={20} /> },
            { id: "settings", label: "Settings", icon: <Settings size={20} /> }
          ].map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`flex items-center space-x-3 w-full p-3 rounded-lg text-left ${
                activeSection === id ? "bg-brand-primary/20 text-white" : "hover:bg-brand-primary/10"
              }`}
            >
              {icon}
              <span>{label}</span>
              {id === "messages" && notifications > 0 && (
                <span className="ml-auto bg-brand-accent text-brand-secondary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-4 border-t border-brand-primary/30">
          <button className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-brand-primary/10">
            <LogOut size={20} /> 
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="p-4 bg-white border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-xl w-1/3">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search remedies, clients, or consultations..."
              className="ml-2 w-full bg-transparent outline-none text-sm"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 rounded-lg hover:bg-gray-100">
              <Bell size={20} className="text-gray-600" />
              {notifications > 0 && (
                <span className="absolute top-1 right-1 bg-brand-accent text-brand-secondary text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="font-medium text-brand-darkText">Dr. Redeemer Arukakwa</p>
                <p className="text-xs text-gray-500">Certified Herbalist</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-primary to-brand-clay flex items-center justify-center text-white font-medium">
                RA
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Sections */}
        <section className="flex-1 p-6 overflow-y-auto bg-gray-50">
          {/* Overview Section */}
          {activeSection === "overview" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-brand-darkText">Dashboard Overview</h2>
                
                {/* FIXED New Remedy button */}
                <Link to="/create-remedy">
                  <button className="flex items-center space-x-2 bg-brand-clay text-white px-4 py-2 rounded-lg hover:bg-opacity-90">
                    <PlusCircle size={18} />
                    <span>Create Remedy</span>
                  </button>
                </Link>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-500">Total Remedies</h3>
                    <Book size={20} className="text-brand-primary" />
                  </div>
                  <p className="text-2xl font-bold text-brand-darkText mt-2">{stats.totalRemedies}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp size={14} className="text-green-500" />
                    <span className="text-xs text-green-500 ml-1">+12% this month</span>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-500">Active Clients</h3>
                    <Users size={20} className="text-brand-primary" />
                  </div>
                  <p className="text-2xl font-bold text-brand-darkText mt-2">{stats.totalClients}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp size={14} className="text-green-500" />
                    <span className="text-xs text-green-500 ml-1">+5% this month</span>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-500">Average Rating</h3>
                    <Star size={20} className="text-brand-primary" />
                  </div>
                  <p className="text-2xl font-bold text-brand-darkText mt-2">{stats.avgRating}/5</p>
                  <div className="flex items-center mt-2">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-xs text-gray-500 ml-1">from 38 reviews</span>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-500">Monthly Views</h3>
                    <Eye size={20} className="text-brand-primary" />
                  </div>
                  <p className="text-2xl font-bold text-brand-darkText mt-2">{stats.monthlyViews}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp size={14} className="text-green-500" />
                    <span className="text-xs text-green-500 ml-1">+22% this month</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Remedies */}
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-brand-darkText">Recent Remedies</h3>
                    <button className="text-sm text-brand-clay hover:underline">View all</button>
                  </div>
                  <div className="space-y-4">
                    {recentRemedies.map(remedy => (
                      <div key={remedy.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                        <div>
                          <h4 className="font-medium text-brand-darkText">{remedy.name}</h4>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="text-xs text-gray-500">{remedy.views} views</span>
                            <span className="text-xs text-gray-500">{remedy.saves} saves</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${remedy.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                              {remedy.status}
                            </span>
                          </div>
                        </div>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <Edit3 size={16} className="text-gray-500" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Upcoming Consultations */}
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-brand-darkText">Upcoming Consultations</h3>
                    <button className="text-sm text-brand-clay hover:underline">View all</button>
                  </div>
                  <div className="space-y-4">
                    {upcomingConsultations.map(consultation => (
                      <div key={consultation.id} className="p-3 border border-gray-100 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-brand-darkText">{consultation.client}</h4>
                            <p className="text-sm text-gray-500 mt-1">{consultation.time}</p>
                          </div>
                          <span className="text-xs bg-brand-accent/20 text-brand-secondary px-2 py-1 rounded">
                            {consultation.type}
                          </span>
                        </div>
                        <div className="flex space-x-2 mt-3">
                          <button className="text-xs bg-brand-primary text-white px-3 py-1.5 rounded-lg">
                            Confirm
                          </button>
                          <button className="text-xs border border-gray-300 text-gray-600 px-3 py-1.5 rounded-lg">
                            Reschedule
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Other sections placeholder */}
          {activeSection !== "overview" && (
            <div>
              <h2 className="text-2xl font-semibold text-brand-darkText mb-6 capitalize">
                {activeSection.replace(/([A-Z])/g, ' $1')}
              </h2>
              <p className="text-gray-500">Content for the {activeSection} section will be displayed here.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default HerbalistDashboard;
