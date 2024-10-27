const customers = [
    {
      name: "Arun Kumar",
      company: "Tech Solutions",
      phone: "+91 9876543210",
      email: "arun.kumar@techsolutions.com",
      country: "India",
      status: "Active"
    },
    {
      name: "Emily Johnson",
      company: "GreenTech Ltd.",
      phone: "+44 7700123456",
      email: "emily.johnson@greentech.co.uk",
      country: "United Kingdom",
      status: "Inactive"
    },
    {
      name: "Michael Brown",
      company: "Innovatech",
      phone: "+1 2025550123",
      email: "michael.brown@innovatech.com",
      country: "United States",
      status: "Active"
    },
    {
      name: "Sophie Zhang",
      company: "EcoWorld",
      phone: "+86 13123456789",
      email: "sophie.zhang@ecoworld.cn",
      country: "China",
      status: "Pending"
    }
  ];
  
  export const getCustomers = function(){
    return customers;
  }
