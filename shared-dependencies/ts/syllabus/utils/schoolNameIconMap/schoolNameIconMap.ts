import * as Schools from "@bit/wasedatime.shared-library-js.syllabus.constants.schools";

import fseIcon from "./icons/fse.png";
import cseIcon from "./icons/cse.png";
import aseIcon from "./icons/ase.png";
import pseIcon from "./icons/pse.png";
import silsIcon from "./icons/sils.png";
import sssIcon from "./icons/sss.png";
import humIcon from "./icons/hum.png";
import lawIcon from "./icons/law.png";
import spsIcon from "./icons/sps.png";
import cmsIcon from "./icons/cms.png";
import hssIcon from "./icons/hss.png";
import socIcon from "./icons/soc.png";
import eduIcon from "./icons/edu.png";

import fseIcon_jp from "./icons/fse_jp.png";
import cseIcon_jp from "./icons/cse_jp.png";
import aseIcon_jp from "./icons/ase_jp.png";
import pseIcon_jp from "./icons/pse_jp.png";
import silsIcon_jp from "./icons/sils_jp.png";
import sssIcon_jp from "./icons/sss_jp.png";
import humIcon_jp from "./icons/hum_jp.png";
import lawIcon_jp from "./icons/law_jp.png";
import spsIcon_jp from "./icons/sps_jp.png";
import cmsIcon_jp from "./icons/cms_jp.png";
import hssIcon_jp from "./icons/hss_jp.png";
import socIcon_jp from "./icons/soc_jp.png";
import eduIcon_jp from "./icons/edu_jp.png";

import gPsIcon from "./icons/g_ps.png";
import gEIcon from "./icons/g_e.png";
import gLawIcon from "./icons/g_law.png";
import gLasIcon from "./icons/g_las.png";
import gScIcon from "./icons/g_sc.png";
import gEduIcon from "./icons/g_edu.png";
import gHumIcon from "./icons/g_hum.png";
import gSssIcon from "./icons/g_sss.png";
import gSapsIcon from "./icons/g_saps.png";
import gItsIcon from "./icons/g_its.png";
import gSjalIcon from "./icons/g_sjal.png";
import gIpsIcon from "./icons/g_ips.png";
import gWlsIcon from "./icons/g_wls.png";
import gSaIcon from "./icons/g_sa.png";
import gSpsIcon from "./icons/g_sps.png";
import gFseIcon from "./icons/g_fse.png";
import gCseIcon from "./icons/g_cse.png";
import gAseIcon from "./icons/g_ase.png";
import gSeeeIcon from "./icons/g_seee.png";
import gSiccsIcon from "./icons/g_siccs.png";
import gWbsIcon from "./icons/g_wbs.png";

import gPsIcon_jp from "./icons/g_ps_jp.png";
import gEIcon_jp from "./icons/g_e_jp.png";
import gLawIcon_jp from "./icons/g_law_jp.png";
import gLasIcon_jp from "./icons/g_las_jp.png";
import gScIcon_jp from "./icons/g_sc_jp.png";
import gEduIcon_jp from "./icons/g_edu_jp.png";
import gHumIcon_jp from "./icons/g_hum_jp.png";
import gSssIcon_jp from "./icons/g_sss_jp.png";
import gSapsIcon_jp from "./icons/g_saps_jp.png";
import gItsIcon_jp from "./icons/g_its_jp.png";
import gSjalIcon_jp from "./icons/g_sjal_jp.png";
import gIpsIcon_jp from "./icons/g_ips_jp.png";
import gWlsIcon_jp from "./icons/g_wls_jp.png";
import gSaIcon_jp from "./icons/g_sa_jp.png";
import gSpsIcon_jp from "./icons/g_sps_jp.png";
import gFseIcon_jp from "./icons/g_fse_jp.png";
import gCseIcon_jp from "./icons/g_cse_jp.png";
import gAseIcon_jp from "./icons/g_ase_jp.png";
import gSeeeIcon_jp from "./icons/g_seee_jp.png";
import gSiccsIcon_jp from "./icons/g_siccs_jp.png";
import gWbsIcon_jp from "./icons/g_wbs_jp.png";

import artIcon from "./icons/art.png";
import cjlIcon from "./icons/cjl.png";
import cieIcon from "./icons/cie.png";
import gecIcon from "./icons/gec.png";

import artIcon_jp from "./icons/art_jp.png";
import cjlIcon_jp from "./icons/cjl_jp.png";
import cieIcon_jp from "./icons/cie_jp.png";
import gecIcon_jp from "./icons/gec_jp.png";

export const undergradSchoolNameIconMap = (lng) =>
  lng === "jp"
    ? {
        [Schools.SILS]: silsIcon_jp,
        [Schools.PSE]: pseIcon_jp,
        [Schools.SSS]: sssIcon_jp,
        [Schools.FSE]: fseIcon_jp,
        [Schools.CSE]: cseIcon_jp,
        [Schools.ASE]: aseIcon_jp,
        [Schools.LAW]: lawIcon_jp,
        [Schools.CMS]: cmsIcon_jp,
        [Schools.HSS]: hssIcon_jp,
        [Schools.EDU]: eduIcon_jp,
        [Schools.SOC]: socIcon_jp,
        [Schools.HUM]: humIcon_jp,
        [Schools.SPS]: spsIcon_jp,
      }
    : {
        [Schools.SILS]: silsIcon,
        [Schools.PSE]: pseIcon,
        [Schools.SSS]: sssIcon,
        [Schools.FSE]: fseIcon,
        [Schools.CSE]: cseIcon,
        [Schools.ASE]: aseIcon,
        [Schools.LAW]: lawIcon,
        [Schools.CMS]: cmsIcon,
        [Schools.HSS]: hssIcon,
        [Schools.EDU]: eduIcon,
        [Schools.SOC]: socIcon,
        [Schools.HUM]: humIcon,
        [Schools.SPS]: spsIcon,
      };

export const gradSchoolNameIconMap = (lng) =>
  lng === "jp"
    ? {
        [Schools.G_PS]: gPsIcon_jp,
        [Schools.G_E]: gEIcon_jp,
        [Schools.G_LAW]: gLawIcon_jp,
        [Schools.G_LAS]: gLasIcon_jp,
        [Schools.G_SC]: gScIcon_jp,
        [Schools.G_EDU]: gEduIcon_jp,
        [Schools.G_HUM]: gHumIcon_jp,
        [Schools.G_SSS]: gSssIcon_jp,
        [Schools.G_SAPS]: gSapsIcon_jp,
        [Schools.G_ITS]: gItsIcon_jp,
        [Schools.G_SJAL]: gSjalIcon_jp,
        [Schools.G_IPS]: gIpsIcon_jp,
        [Schools.G_WLS]: gWlsIcon_jp,
        [Schools.G_SA]: gSaIcon_jp,
        [Schools.G_SPS]: gSpsIcon_jp,
        [Schools.G_FSE]: gFseIcon_jp,
        [Schools.G_CSE]: gCseIcon_jp,
        [Schools.G_ASE]: gAseIcon_jp,
        [Schools.G_SEEE]: gSeeeIcon_jp,
        [Schools.G_SICCS]: gSiccsIcon_jp,
        [Schools.G_WBS]: gWbsIcon_jp,
      }
    : {
        [Schools.G_PS]: gPsIcon,
        [Schools.G_E]: gEIcon,
        [Schools.G_LAW]: gLawIcon,
        [Schools.G_LAS]: gLasIcon,
        [Schools.G_SC]: gScIcon,
        [Schools.G_EDU]: gEduIcon,
        [Schools.G_HUM]: gHumIcon,
        [Schools.G_SSS]: gSssIcon,
        [Schools.G_SAPS]: gSapsIcon,
        [Schools.G_ITS]: gItsIcon,
        [Schools.G_SJAL]: gSjalIcon,
        [Schools.G_IPS]: gIpsIcon,
        [Schools.G_WLS]: gWlsIcon,
        [Schools.G_SA]: gSaIcon,
        [Schools.G_SPS]: gSpsIcon,
        [Schools.G_FSE]: gFseIcon,
        [Schools.G_CSE]: gCseIcon,
        [Schools.G_ASE]: gAseIcon,
        [Schools.G_SEEE]: gSeeeIcon,
        [Schools.G_SICCS]: gSiccsIcon,
        [Schools.G_WBS]: gWbsIcon,
      };

export const otherSchoolNameIconMap = (lng) =>
  lng === "jp"
    ? {
        [Schools.CJL]: cjlIcon_jp,
        [Schools.GEC]: gecIcon_jp,
        [Schools.CIE]: cieIcon_jp,
        [Schools.ART]: artIcon_jp,
      }
    : {
        [Schools.CJL]: cjlIcon,
        [Schools.GEC]: gecIcon,
        [Schools.CIE]: cieIcon,
        [Schools.ART]: artIcon,
      };

export const allSchoolNameIconMap = (lng) => ({
  ...undergradSchoolNameIconMap(lng),
  ...gradSchoolNameIconMap(lng),
  ...otherSchoolNameIconMap(lng),
});

export default allSchoolNameIconMap;