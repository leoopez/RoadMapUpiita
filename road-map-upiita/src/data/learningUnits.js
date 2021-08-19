/** @format */

const DataUnits = [
  {
    name: "Cálculo Dif.\ne Integral",
    credits: [3, 3],
    level: 1,
    semester: 1,
    recommended: [],
    linked: [],
  },
  {
    name: "Algebra Lineal\nNúm. Complejos",
    credits: [4.5, 0],
    level: 1,
    semester: 1,
    recommended: [],
    linked: [],
  },
  {
    name: "Mecánica de\nla Partícula",
    credits: [4.5, 0],
    level: 1,
    semester: 1,
    recommended: [],
    linked: [],
  },
  {
    name: "Introduccion\na la Mecatronica",
    credits: [1.5, 1.5],
    level: 1,
    semester: 1,
    recommended: [],
    linked: []
  },
  {
    name: "Estructura y\nPropiedades de\nlos Materiales",
    credits: [3, 1.5],
    level: 1,
    semester: 1,
    recommended: [],
    linked: [],
  },
  {
    name: "Herramientas\nComputacionales",
    credits: [0, 3],
    level: 1,
    semester: 1,
    recommended: [],
    linked: [],
  },
  {
    name: "Introduccion a\nla Programacion",
    credits: [0, 4.5],
    level: 1,
    semester: 1,
    recommended: [],
    linked: [],
  },
  {
    name: "Dibujo Asistido\npor Computadora",
    credits: [0, 3],
    level: 1,
    semester: 1,
    prevUnits: {},
  },
  {
    name: "Ecuaciones\nDiferenciales",
    credits: [4.5, 0],
    level: 1,
    semester: 2,
    recommended: [0, 1],
    linked: [],
    
  },
  {
    name: "Calculo\nVectorial",
    credits: [3, 3],
    level: 1,
    semester: 2,
    recommended: [],
    linked: [0],
  },
  {
    name: "Mecanica\ndel Cuerpo\nRigido",
    credits: [4.5, 0],
    level: 1,
    semester: 2,
    recommended: [0],
    linked: [2],
  },
  {
    name: "Comunicaion\nOral y Escrita",
    credits: [1.5, 3],
    level: 1,
    semester: 2,
    recommended: [],
    linked: [],
  },
  {
    name: "Circuitos\nElectricos",
    credits: [0, 3],
    level: 1,
    semester: 2,
    recommended: [],
    linked: [],
  },
  {
    name: "Procesos de\nManufactura",
    credits: [0, 4.5],
    level: 1,
    semester: 2,
    recommended: [],
    linked: [4, 7],
  },
  {
    name: "Analisis y\nDiseño de\nProgramas",
    credits: [0, 3],
    level: 1,
    semester: 2,
    recommended: [],
    linked: [6],
  },
  {
    name: "Electricidad y\nMagnetismo",
    credits: [4.5, 0],
    level: 1,
    semester: 3,
    recommended: [12],
    linked: [9],
  },
  {
    name: "Circuitos\nElectricos\nAvanzados",
    credits: [3, 1.5],
    level: 1,
    semester: 3,
    recommended: [],
    linked: [8, 12],
  },
  {
    name: "Fundamentos\nde Electronica",
    credits: [1.5, 3],
    level: 1,
    semester: 3,
    recommended: [],
    linked: [12],
  },
  {
    name: "Ingles I",
    credits: [0, 3],
    level: 1,
    semester: 3,
    recommended: [],
    linked: [],
  },
  {
    name: "Mantenimiento\ny Sistemas de\nManufactura",
    credits: [1.5, 3],
    level: 2,
    semester: 3,
    recommended: [],
    linked: [13],
  },
  {
    name: "Analisis y\nSintesis de Mecanismos",
    credits: [3, 1.5],
    level: 2,
    semester: 3,
    recommended: [5],
    linked: [10],
  },
  {
    name: "Analisis de\nSenales y\nSistemas",
    credits: [3, 1.5],
    level: 2,
    semester: 3,
    recommended: [5],
    linked: [8],
  },
  {
    name: "Resistencia\nde Materiales",
    credits: [4.5, 0],
    level: 1,
    semester: 4,
    recommended: [],
    linked: [4, 10],
  },
  {
    name: "Ingles II",
    credits: [0, 3],
    level: 1,
    semester: 4,
    recommended: [18],
    linked: [],
  },
  {
    name: "Termodinamica",
    credits: [4.5, 0],
    level: 2,
    semester: 4,
    recommended: [8, 9],
    linked: [],
  },
  {
    name: "Probabilidad y\nEstadistica\npara Ingenieria",
    credits: [4.5, 0],
    level: 2,
    semester: 4,
    recommended: [],
    linked: [],
  },
  {
    name: "Electonica\nAnalogica",
    credits: [3, 1.5],
    level: 2,
    semester: 4,
    recommended: [],
    linked: [16, 17],
  },
  {
    name: "Sim. Electronica\ny Diseno de\nCtos. Impresos",
    credits: [0, 3],
    level: 2,
    semester: 4,
    recommended: [17],
    linked: [16],
  },
  {
    name: "Oscilaciones\ny Optica",
    credits: [3, 1.5],
    level: 2,
    semester: 4,
    recommended: [2],
    linked: [8],
  },
  {
    name: "Programacion\nAvanzada",
    credits: [0, 3],
    level: 2,
    semester: 4,
    recommended: [],
    linked: [14],
  },
  {
    name: "Mecainca\nde Fluidos",
    credits: [3, 0],
    level: 2,
    semester: 5,
    recommended: [8, 9],
    linked: [],
  },
  {
    name: "Teoria\nElectromagnetica",
    credits: [4.5, 0],
    level: 2,
    semester: 5,
    recommended: [8],
    linked: [15, 9],
  },
  {
    name: "Diseno Basico\nde Elementos\nde Maquinas",
    credits: [3, 1.5],
    level: 2,
    semester: 5,
    recommended: [9, 13],
    linked: [22],
  },
  {
    name: "Administracion\nOrganizacional",
    credits: [1.5, 1.5],
    level: 2,
    semester: 5,
    recommended: [11],
    linked: [],
  },
  {
    name: "Microprocesadores,\nMicrocontroladores\ne Interfaz",
    credits: [0, 4.5],
    level: 2,
    semester: 5,
    recommended: [27],
    linked: [],
  },
  {
    name: "Circuitos\nLogicos",
    credits: [1.5, 3],
    level: 2,
    semester: 5,
    recommended: [],
    linked: [17],
  },
  {
    name: "Modelado y\nSimulacion de Sist.\nMecatronicos",
    credits: [0, 3],
    level: 3,
    semester: 5,
    recommended: [],
    linked: [21],
  },
  {
    name: "Etica para\nel Ejercicio\nProfesional",
    credits: [1.5, 1.5],
    level: 3,
    semester: 5,
    recommended: [],
    linked: [],
  },
  {
    name: "Electronica\nde Potencia",
    credits: [1.5, 1.5],
    level: 4,
    semester: 5,
    recommended: [],
    linked: [26],
  },
  {
    name: "Sensores y\nAcondicionadores\nde Senal",
    credits: [1.5, 1.5],
    level: 2,
    semester: 6,
    recommended: [16],
    linked: [17],
  },
  {
    name: "Neumatica\ne Hidraulica",
    credits: [0, 3],
    level: 2,
    semester: 6,
    recommended: [35],
    linked: [],
  },
  {
    name: "Dispositivos\nLogicos\nProgramables",
    credits: [0, 3],
    level: 2,
    semester: 6,
    recommended: [12],
    linked: [35],
  },
  {
    name: "Ingles III",
    credits: [0, 3],
    level: 2,
    semester: 6,
    recommended: [23],
    linked: [],
  },
  {
    name: "Maquinas\nElectricas",
    credits: [1.5, 1.5],
    level: 2,
    semester: 6,
    recommended: [15],
    linked: [31],
  },
  {
    name: "Intrumentacion\nVirutal",
    credits: [0, 3],
    level: 3,
    semester: 6,
    recommended: [],
    linked: [],
  },
  {
    name: "Control\nClasico",
    credits: [3, 1.5],
    level: 3,
    semester: 6,
    recommended: [5],
    linked: [21],
  },
  {
    name: "Finanzas e\nIngenieria\nEconomica",
    credits: [1.5, 1.5],
    level: 3,
    semester: 6,
    recommended: [33],
    linked: [],
  },
  {
    name: "Diseno Avanzado\nde Elementos\nde Maquina",
    credits: [3, 1.5],
    level: 3,
    semester: 6,
    recommended: [32],
    linked: [],
  },
  {
    name: "Sitemas\nNeurodifusos",
    credits: [0, 3],
    level: 2,
    semester: 7,
    recommended: [5],
    linked: [],
  },
  {
    name: "Liderazgo y\nEmprendedores",
    credits: [1.5, 1.5],
    level: 2,
    semester: 7,
    recommended: [11],
    linked: [],
  },
  {
    name: "Proyecto\nIntregrador",
    credits: [0, 3],
    level: 3,
    semester: 7,
    recommended: [],
    linked: [],
  },
  {
    name: "Optativa 1",
    credits: [0, 4.5],
    level: 3,
    semester: 7,
    recommended: [],
    linked: [],
  },
  {
    name: "Optativa 2",
    credits: [0, 4.5],
    level: 3,
    semester: 7,
    recommended: [],
    linked: [],
  },
  {
    name: "Procesador\nDigital de\nSenales",
    credits: [0, 3],
    level: 3,
    semester: 7,
    recommended: [],
    linked: [21],
  },
  {
    name: "Ingenieria\nAsistida por\nComputadora",
    credits: [1.5, 3],
    level: 4,
    semester: 7,
    recommended: [],
    linked: [],
  },
  {
    name: "Control de\nMaquinas\nElectricas",
    credits: [1.5, 1.5],
    level: 5,
    semester: 7,
    recommended: [],
    linked: [43, 45],
  },
  {
    name: "Automatizacion\nIndustrial",
    credits: [0, 4.5],
    level: 3,
    semester: 8,
    recommended: [],
    linked: [40],
  },
  {
    name: "Ingenieria\nAmbiental",
    credits: [1.5, 1.5],
    level: 3,
    semester: 8,
    recommended: [],
    linked: [],
  },
  {
    name: "Optativa 3",
    credits: [0, 4.5],
    level: 3,
    semester: 8,
    recommended: [],
    linked: [],
  },
  {
    name: "Optativa 4",
    credits: [0, 6],
    level: 4,
    semester: 8,
    recommended: [],
    linked: [],
  },
  {
    name: "Proyectos\nde Inversion",
    credits: [1.5, 1.5],
    level: 4,
    semester: 8,
    recommended: [],
    linked: [46],
  },
  {
    name: "Metodologia de\nla Investigacion",
    credits: [1.5, 3],
    level: 4,
    semester: 8,
    recommended: [],
    linked: [],
  },
  {
    name: "Sitemas\nde Vision\nArtificial",
    credits: [1.5, 1.5],
    level: 4,
    semester: 8,
    recommended: [],
    linked: [44],
  },
  {
    name: "Control de\nSistemas\nMecatronicos",
    credits: [1.5, 3],
    level: 4,
    semester: 8,
    recommended: [],
    linked: [36],
  },
  {
    name: "Optativa 5",
    credits: [0, 6],
    level: 4,
    semester: 9,
    recommended: [],
    linked: [],
  },
  {
    name: "Optativa 6",
    credits: [0, 6],
    level: 4,
    semester: 9,
    recommended: [],
    linked: [],
  },
  {
    name: "Servicio Social",
    credits: [0, 0],
    level: 5,
    semester: 9,
    recommended: [],
    linked: [],
  },
  {
    name: "Trabajo\nTerminal I",
    credits: [0, 7.5],
    level: 5,
    semester: 9,
    recommended: [],
    linked: [61],
  },
  {
    name: "Trabajo\nTerminal II",
    credits: [0, 7.5],
    level: 5,
    semester: 10,
    recommended: [],
    linked: [],
  },
];

export default DataUnits;

/*


0 cal
1 alg
2 particula
3 intro
4 materiales
5 herramientas
6 intro progra
7 dibujo

8 diferenciales
9 vectorial
10 rigido
11 comunicaion
12 circuitos
13 processos
14 diseno de progra

15 electricidad
16 avanzados
17 fundamentos
18 ingles 1
19 mantenimiento
20 mecanismos
21 senales

22 resistencia
23 ingles 11
24 termo
25 proba
26 analogica
27 simulacion
28 osci
29 avanzada

30 fluidos
31 teoria
32 diseno basico
33 administracion
34 micros
35 logicos
36 modelado
37 etica
38 potencia

39 sensores
40 neumatica
41 dlp
42 ingles 111
43 maquinas
44 instrumentacion
45 control
46 finanzas
47 diseno avanzado

48 sistemas 
49 liderazgo
50 proyecyto integrador
51 op 1
52 op 2
53 procesador
54 asistida
55 control de maquinas

56 industrual
57 ambiental
58 op3
59 op4
60 proyectos de inversion
61 metodologia
62 sistemas 
63 control de sistemas
*/
