import {BiSolidShip} from 'react-icons/bi'
import {FcAssistant,FcApproval,FcCloth,FcCandleSticks,FcAddressBook,FcShipped, FcFile, FcImageFile, FcKindle, FcMultipleInputs, FcHighPriority, FcCollect, FcTimeline, FcCollaboration} from 'react-icons/fc'
import afip from '@/public/assets/enlacesLogos/afip.svg'
import agadmin from '@/public/assets/enlacesLogos/agmin.svg'
import agadmin2 from '@/public/assets/enlacesLogos/agmin2.svg'
import bna from '@/public/assets/enlacesLogos/bna.svg'
import senasa from '@/public/assets/enlacesLogos/senasa.svg'

export const services = [
    {
        servicio: 'Operaciones en Depósitos Fiscales, Plantas y Terminales Portuarias',
        icon: BiSolidShip
    },
    {
        servicio: 'Corresponsalías en aduanas de Buenos Aires, Ezeiza, Campana y Santa Fe.',
        icon: FcShipped
    },
    {
        servicio: 'Gestión de Permisos de Exportación y Despachos de Importación, Temporales, Tránsitos.',
        icon: FcFile
    },
    {
        servicio: 'Inscripción en AFIP como Exportador / Importador.',
        icon: FcImageFile
    },
    {
        servicio: 'Tramitación de DJVE.',
        icon: FcKindle
    },
    {
        servicio: 'Tramitación de SIMI y Licencias No Automáticas.',
        icon: FcKindle
    },
    {
        servicio: 'Operaciones en Depósitos Fiscales, Plantas y Terminales Portuarias.',
        icon: FcMultipleInputs
    },
    {
        servicio: 'Corresponsalías en aduanas de Buenos Aires, Ezeiza, Campana y Santa Fe.',
        icon: FcShipped
    },
    {
        servicio: 'Cancelación de Permisos de Embarque en consignación.',
        icon: FcHighPriority
    },
    {
        servicio: 'Envío e ingreso de muestras.',
        icon: FcCollect
    },
    {
        servicio: 'Conexión con Depósitos Fiscales, Plantas, Terminales',
        icon: FcTimeline
    },
    {
        servicio: 'Portuarias y Aeroportuarias.',
        icon: FcCollaboration
    },
    {
        servicio: 'Gestión y tramitación de documentación ante Organismos Oficiales y Cámaras de Comercio.',
        icon:FcAddressBook
        },
        {
            servicio: 'Coordinación con empresas de control y fumigación.',
            icon:FcCandleSticks
            },
            {
                servicio: 'Contacto con forwarders, líneas marítimas. Contratación de fletes nacionales e internacionales.',
                icon:FcCloth
                },
                {
                    servicio: 'Asesoramiento sobre aspectos generales de la operación a proveedores y compradores del exterior.',
                    icon:FcAddressBook
                    },
                    {
                        servicio: 'Seguros para todo tipo de cargas.',
                        icon:FcApproval
                        },
                        {
                            servicio: 'Asesoramiento sobre pequeños envíos.',
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