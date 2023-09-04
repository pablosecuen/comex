import {BiSolidShip} from 'react-icons/bi'
import {FcAssistant,FcApproval,FcCloth,FcCandleSticks,FcAddressBook,FcShipped, FcFile, FcImageFile, FcKindle, FcMultipleInputs, FcHighPriority, FcCollect, FcTimeline, FcCollaboration} from 'react-icons/fc'
import afip from '@/public/assets/enlacesLogos/afip.svg'
import agadmin from '@/public/assets/enlacesLogos/agmin.svg'
import agadmin2 from '@/public/assets/enlacesLogos/agmin2.svg'
import bna from '@/public/assets/enlacesLogos/bna.svg'
import senasa from '@/public/assets/enlacesLogos/senasa.svg'

export const services = [
    {
        title:"Operaciones",
        servicio: 'Depósitos Fiscales, Plantas y Terminales Portuarias',
        icon: BiSolidShip
    },
    {
        title:"Corresponsalias",
        servicio: 'aduanas de Buenos Aires, Ezeiza, Campana y Santa Fe.',
        icon: FcShipped
    },
    {
        title:"Gestión",
        servicio: 'Permisos Exportación y Despachos de Importación, Temporales, Tránsitos.',
        icon: FcFile
    },
    {
        title:"Inscripciónes",
        servicio: 'AFIP como Exportador / Importador.',
        icon: FcImageFile
    },
    {
        
         title:"Trámites",
        servicio: 'Tramitación de DJVE.',
        icon: FcKindle
    },
    {
         title:"Trámites",
        servicio: 'Tramitación de SIMI y Licencias No Automáticas.',
        icon: FcKindle
    },
    {
         title:"Operaciones",
        servicio: 'Depósitos Fiscales, Plantas y Terminales Portuarias.',
        icon: FcMultipleInputs
    },
    {
         title:"Corresponsalías",
        servicio: 'en aduanas de Buenos Aires, Ezeiza, Campana y Santa Fe.',
        icon: FcShipped
    },
    {
         title:"Permisos",
        servicio: 'Cancelación de Permisos de Embarque en consignación.',
        icon: FcHighPriority
    },
    {
         title:"Despachos",
        servicio: 'Envío e ingreso de muestras.',
        icon: FcCollect
    },
    {
         title:"Conexiones",
        servicio: 'Depósitos Fiscales, Plantas, Terminales',
        icon: FcTimeline
    },
    {
        title:"Operaciones",
        servicio: 'Portuarias y Aeroportuarias.',
        icon: FcCollaboration
    },
    {
        title:"Trámites",
        servicio: 'Documentación ante Organismos Oficiales y Cámaras de Comercio.',
        icon:FcAddressBook
    },
    {
        title:"Trámites",
        servicio: 'Coordinación con empresas de control y fumigación.',
        icon:FcCandleSticks
    },
    {
        title:"Gestión",
        servicio: 'Contacto con forwarders, líneas marítimas. Contratación de fletes nacionales e internacionales.',
        icon:FcCloth
    }, 
    {
        title:"Asesoramiento",
        servicio: 'Sobre aspectos generales de la operación a proveedores y compradores del exterior.',
        icon:FcAddressBook
    },
    {
        title:"Trámites",
        servicio: 'Seguros para todo tipo de cargas.',
        icon:FcApproval
    },
    {
        title:"Asesoramiento",
        servicio: 'Sobre pequeños envíos.',
        icon:FcAssistant
    },
]

export const enlaces = [
    {name:'AFIP', link:'https://www.afip.gob.ar/landing/default.asp', icon: afip},
    {name:'SENASA', link:'https://www.argentina.gob.ar/senasa', icon: senasa},
    {name:'AGADMIN', link:'https://www.agroindustria.gob.ar/sitio/areas/cuotasyregistros/', icon: agadmin},
    {name:'AGADMIN2', link:'https://dinem.agroindustria.gob.ar/dinem_fob.wp_fob_consall.aspx', icon: agadmin2},
    {name:'BNA', link:'https://www.bna.com.ar/Personas', icon: bna},
    
]