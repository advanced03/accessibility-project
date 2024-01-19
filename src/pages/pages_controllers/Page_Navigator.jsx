import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import CompanyLogin from '@/pages/screens/CompanyLogin.jsx';
import ExpertLogin from '@/pages/screens/ExpertLogin.jsx';
import ExpertSignUp from '@/pages/screens/ExpertSignUp.jsx';
import CompanySignUp from '@/pages/screens/CompanySignUp.jsx';
import PortaalKeuze from '@/pages/screens/Portal_Keuze.jsx';
import ExpertPortal from '@/pages/screens/ExpertPortal.jsx'
import AssignmentCreator from '@/pages/screens/AssignmentCreator.jsx'
import CompanyPortal from '@/pages/screens/CompanyPortal.jsx'
import ExpertProfiel from '@/pages/screens/ExpertProfiel.jsx'
import CompanyProfiel from '@/pages/screens/CompanyProfiel.jsx'
import Password from '@/pages/screens/Password.jsx'
import AdminDashboard from '@/pages/screens/AdminDashboard.jsx'

const PageNavigator = () => {
    const [userType, setUserType] = useState(null);
    const navigate = useNavigate();

    const handleToCompanyLogin = () => {
        navigate('/Companylogin');
    };
    const handleToExpertLogin = () => {
        navigate('/Expertlogin');
    };

    const handleToAanmeld = () => {
        if (userType === 'expert') {
            navigate('/expert_signup');
        } else if (userType === 'company') {
            navigate('/company_signup');
        }
    };
    const handleToPortal = () => {
        navigate('/portal');
    };

    const handleToCompanyPortal = () => {
        navigate('company_portal');
    };
    const handleToExpertPortal = () => {
        navigate('/expert_portal');
    };
    
    const handlePortalButtonClick = (selectedUserType) => {
        setUserType(selectedUserType);
        if (userType === 'expert') {
            handleToExpertLogin();
        } else if (userType === 'company') {
            handleToCompanyLogin();
        }
    };

    return (
        <div>
            <Routes>
                <Route path="/Companylogin" element={<CompanyLogin handleToAanmeld={handleToAanmeld} handleToPortal={handleToPortal} userType={userType} handleToCompanyPortal={handleToCompanyPortal} />} />
                <Route path="/Expertlogin" element={<ExpertLogin handleToAanmeld={handleToAanmeld} handleToPortal={handleToPortal} userType={userType} handleToExpertPortal={handleToExpertPortal} />} />
                <Route path="/expert_signup" element={<ExpertSignUp handleToExpertLogin={handleToExpertLogin} handleToExpertPortal={handleToExpertPortal} />} />
                <Route path="/company_signup" element={<CompanySignUp handleToCompanyLogin={handleToCompanyLogin} handleToCompanyPortal={handleToCompanyPortal} />} />
                <Route path="/portal" element={<PortaalKeuze handlePortalButtonClick={handlePortalButtonClick} />} />
                <Route path='/expert_portal' element={<ExpertPortal />} />
                <Route path='/assignment_creator' element={<AssignmentCreator />} />
                <Route path="/company_portal" element={<CompanyPortal />} />
                <Route path="/expertProfiel" element={<ExpertProfiel />} />
                <Route path="/companyProfiel" element={<CompanyProfiel />} />
                <Route path="/password" element={<Password />} />
                <Route path="/admin_dashboard" element={<AdminDashboard />} />
                <Route index element={<Navigate to="/portal" />} />
            </Routes>
        </div>
    );
};

export default PageNavigator;