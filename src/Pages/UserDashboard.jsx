import React, { useState } from "react";
import { Search, Book, Notebook, Compass, Settings, LogOut, ChevronRight, Bell, Plus, Filter, Grid, List } from "lucide-react";

function UserDashboard() {
  const [activeSection, setActiveSection] = useState("discovery");
  const [viewMode, setViewMode] = useState("grid");

  // Sample data for
  const remedies = [
    { id: 1, name: "Lavender Oil", category: "Aromatherapy", saved: true },
    { id: 2, name: "Ginger Tea", category: "Digestive", saved: false },
    { id: 3, name: "Eucalyptus Steam", category: "Respiratory", saved: true },
    { id: 4, name: "Chamomile Compress", category: "Relaxation", saved: false },
    { id: 5, name: "Peppermint Oil", category: "Headache", saved: true },
    { id: 6, name: "Turmeric Paste", category: "Anti-inflammatory", saved: false },
  ];


  const colors = {
    brand: {
      secondary: "#2C442D",   
      primary: "#B6B6AA",     
      accent: "#87CEEB",      
      clay: "#D27D2D",        
      darkText: "#333333",    
      white: "#FFF"           
    }
  };

  return (
    <div className="flex h-screen" style={{ backgroundColor: colors.brand.primary }}>
      {/* Sidebar */}
      <aside className="w-64 flex flex-col p-5 border-r" style={{ backgroundColor: colors.brand.white, borderColor: colors.brand.primary }}>
        <div className="flex items-center mb-10">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: colors.brand.secondary }}>
            <span className="text-white font-bold text-sm">H</span>
          </div>
          <h1 className="text-xl font-bold" style={{ color: colors.brand.darkText }}>HerbalHub</h1>
        </div>
        
        <nav className="space-y-1">
          {[
            { id: "discovery", icon: <Compass size={18} />, label: "Discovery", count: 12 },
            { id: "saved", icon: <Book size={18} />, label: "Saved Remedies", count: 8 },
            { id: "notes", icon: <Notebook size={18} />, label: "My Notes", count: 5 },
            { id: "settings", icon: <Settings size={18} />, label: "Settings" }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center justify-between w-full p-3 rounded-xl transition-all ${
                activeSection === item.id 
                  ? "font-medium shadow-sm" 
                  : "hover:bg-opacity-50"
              }`}
              style={{
                backgroundColor: activeSection === item.id ? `${colors.brand.secondary}20` : "transparent",
                color: activeSection === item.id ? colors.brand.secondary : colors.brand.darkText
              }}
            >
              <div className="flex items-center space-x-3">
                <span style={{ color: activeSection === item.id ? colors.brand.secondary : colors.brand.darkText }}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </div>
              <div className="flex items-center">
                {item.count && (
                  <span className="text-xs px-1.5 py-0.5 rounded-full mr-2" style={{
                    backgroundColor: activeSection === item.id ? colors.brand.secondary : `${colors.brand.secondary}20`,
                    color: activeSection === item.id ? colors.brand.white : colors.brand.secondary
                  }}>
                    {item.count}
                  </span>
                )}
                {activeSection === item.id && <ChevronRight size={16} style={{ color: colors.brand.secondary }} />}
              </div>
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t" style={{ borderColor: colors.brand.primary }}>
          <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: `${colors.brand.secondary}10` }}>
            <h3 className="font-medium text-sm mb-1" style={{ color: colors.brand.secondary }}>Upgrade to Pro</h3>
            <p className="text-xs mb-2" style={{ color: colors.brand.secondary }}>Access premium remedies and features</p>
            <button className="w-full text-xs py-1.5 px-3 rounded-lg transition-colors" style={{
              backgroundColor: colors.brand.secondary,
              color: colors.brand.white
            }}>
              Upgrade Now
            </button>
          </div>
          
          <button className="flex items-center space-x-3 w-full p-3 rounded-xl transition-all" style={{
            color: colors.brand.darkText,
            backgroundColor: `${colors.brand.clay}10`
          }}>
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden" style={{ backgroundColor: `${colors.brand.primary}30` }}>
        {/* Bar Top */}
        <header className="p-5 border-b flex justify-between items-center shadow-sm" style={{
          backgroundColor: colors.brand.white,
          borderColor: colors.brand.primary
        }}>
          <div className="flex items-center px-4 py-2.5 rounded-xl w-1/3" style={{ backgroundColor: `${colors.brand.primary}40` }}>
            <Search size={18} style={{ color: colors.brand.darkText }} />
            <input
              type="text"
              placeholder="Search remedies, ingredients, symptoms..."
              className="ml-3 w-full bg-transparent outline-none text-sm"
              style={{ color: colors.brand.darkText }}
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 rounded-lg transition-colors" style={{
              color: colors.brand.darkText,
              backgroundColor: `${colors.brand.primary}40`
            }}>
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ backgroundColor: colors.brand.clay }}></span>
            </button>
            <div className="flex items-center space-x-3 rounded-xl py-1.5 px-3" style={{ backgroundColor: `${colors.brand.primary}40` }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center font-medium" style={{
                backgroundColor: colors.brand.secondary,
                color: colors.brand.white
              }}>
                U
              </div>
              <div>
                <span className="font-medium text-sm" style={{ color: colors.brand.darkText }}>User Name</span>
                <span className="block text-xs" style={{ color: colors.brand.darkText }}>Free Account</span>
              </div>
            </div>
          </div>
        </header>

        {/* Subheader with title - actions */}
        <div className="border-b px-5 py-4 flex justify-between items-center" style={{
          backgroundColor: colors.brand.white,
          borderColor: colors.brand.primary
        }}>
          <div>
            <h2 className="text-xl font-semibold flex items-center" style={{ color: colors.brand.darkText }}>
              {activeSection === "discovery" && <Compass size={20} className="mr-2" style={{ color: colors.brand.secondary }} />}
              {activeSection === "saved" && <Book size={20} className="mr-2" style={{ color: colors.brand.secondary }} />}
              {activeSection === "notes" && <Notebook size={20} className="mr-2" style={{ color: colors.brand.secondary }} />}
              {activeSection === "settings" && <Settings size={20} className="mr-2" style={{ color: colors.brand.secondary }} />}
              {activeSection === "discovery" && "Discover Remedies"}
              {activeSection === "saved" && "Saved Remedies"}
              {activeSection === "notes" && "My Notes"}
              {activeSection === "settings" && "Settings"}
            </h2>
            <p className="text-sm mt-1" style={{ color: colors.brand.darkText }}>
              {activeSection === "discovery" && "Explore new natural remedies and treatments"}
              {activeSection === "saved" && "Your collection of saved remedies"}
              {activeSection === "notes" && "Your personal notes on remedies"}
              {activeSection === "settings" && "Manage your account preferences"}
            </p>
          </div>
          
          {activeSection !== "settings" && (
            <div className="flex items-center space-x-2">
              <button className="flex items-center text-sm py-2 px-4 rounded-xl transition-colors" style={{
                backgroundColor: colors.brand.secondary,
                color: colors.brand.white
              }}>
                <Plus size={16} className="mr-1" />
                New
              </button>
              <button className="p-2 rounded-lg transition-colors" style={{
                color: colors.brand.darkText,
                backgroundColor: `${colors.brand.primary}40`
              }}>
                <Filter size={18} />
              </button>
              <div className="flex rounded-lg p-1" style={{ backgroundColor: `${colors.brand.primary}40` }}>
                <button 
                  onClick={() => setViewMode("grid")} 
                  className={`p-1.5 rounded-md ${viewMode === "grid" ? "text-white shadow-sm" : "text-gray-500"}`}
                  style={{ backgroundColor: viewMode === "grid" ? colors.brand.secondary : "transparent" }}
                >
                  <Grid size={18} />
                </button>
                <button 
                  onClick={() => setViewMode("list")} 
                  className={`p-1.5 rounded-md ${viewMode === "list" ? "text-white shadow-sm" : "text-gray-500"}`}
                  style={{ backgroundColor: viewMode === "list" ? colors.brand.secondary : "transparent" }}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Dynamic Sections */}
        <section className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {activeSection === "discovery" && (
              <div>
                {/* Categories */}
                <div className="mb-6 flex overflow-x-auto pb-2 scrollbar-hide">
                  {["All", "Aromatherapy", "Digestive", "Respiratory", "Relaxation", "Skin Care", "Pain Relief"].map((category, index) => (
                    <button 
                      key={index}
                      className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium mr-2 ${
                        index === 0 
                          ? "text-white shadow-sm" 
                          : "text-gray-600 hover:bg-opacity-50 border"
                      }`}
                      style={{
                        backgroundColor: index === 0 ? colors.brand.secondary : colors.brand.white,
                        borderColor: colors.brand.primary
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                {/* Remedies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {remedies.map(remedy => (
                    <div key={remedy.id} className="rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow" style={{
                      backgroundColor: colors.brand.white,
                      borderColor: colors.brand.primary
                    }}>
                      <div className="h-40 flex items-center justify-center" style={{ backgroundColor: `${colors.brand.secondary}10` }}>
                        <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-md" style={{ backgroundColor: colors.brand.white }}>
                          <span className="text-2xl">🌿</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium" style={{ color: colors.brand.darkText }}>{remedy.name}</h3>
                            <p className="text-sm mt-1" style={{ color: colors.brand.darkText }}>{remedy.category}</p>
                          </div>
                          <button className={`p-1.5 rounded-lg ${remedy.saved ? "bg-opacity-20" : "hover:bg-opacity-10"}`} style={{
                            color: remedy.saved ? colors.brand.secondary : colors.brand.darkText,
                            backgroundColor: remedy.saved ? `${colors.brand.secondary}20` : "transparent"
                          }}>
                            <Book size={16} fill={remedy.saved ? "currentColor" : "none"} />
                          </button>
                        </div>
                        <button className="w-full mt-4 text-sm py-2 rounded-lg transition-colors" style={{
                          backgroundColor: `${colors.brand.primary}40`,
                          color: colors.brand.darkText
                        }}>
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeSection === "saved" && (
              <div className="rounded-xl border p-5" style={{
                backgroundColor: colors.brand.white,
                borderColor: colors.brand.primary
              }}>
                <p className="text-center py-10" style={{ color: colors.brand.darkText }}>Your saved remedies will appear here</p>
              </div>
            )}
            
            {activeSection === "notes" && (
              <div className="rounded-xl border p-5" style={{
                backgroundColor: colors.brand.white,
                borderColor: colors.brand.primary
              }}>
                <p className="text-center py-10" style={{ color: colors.brand.darkText }}>Your notes will appear here</p>
              </div>
            )}
            
            {activeSection === "settings" && (
              <div className="rounded-xl border p-5" style={{
                backgroundColor: colors.brand.white,
                borderColor: colors.brand.primary
              }}>
                <div className="max-w-md">
                  <h3 className="font-medium mb-4" style={{ color: colors.brand.darkText }}>Account Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: colors.brand.darkText }}>Email Address</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition-colors" 
                        placeholder="user@example.com"
                        style={{
                          borderColor: colors.brand.primary,
                          focusBorderColor: colors.brand.secondary,
                          focusRingColor: colors.brand.secondary
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: colors.brand.darkText }}>Notification Preferences</label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded focus:ring" style={{
                            color: colors.brand.secondary,
                            focusRingColor: colors.brand.secondary
                          }} defaultChecked />
                          <span className="ml-2 text-sm" style={{ color: colors.brand.darkText }}>Email notifications</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded focus:ring" style={{
                            color: colors.brand.secondary,
                            focusRingColor: colors.brand.secondary
                          }} defaultChecked />
                          <span className="ml-2 text-sm" style={{ color: colors.brand.darkText }}>Push notifications</span>
                        </label>
                      </div>
                    </div>
                    <button className="w-full py-2.5 rounded-lg transition-colors" style={{
                      backgroundColor: colors.brand.secondary,
                      color: colors.brand.white
                    }}>
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default UserDashboard;