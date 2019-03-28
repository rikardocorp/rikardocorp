import PhotoProfile from '../assets/img/profile.jpeg'
import Python from '../assets/img/logos/python.png'
import Tensorflow from '../assets/img/logos/tensorflow.png'
import ScikitLearn from '../assets/img/logos/scikit-learn.png'
import React from '../assets/img/logos/react.png'
import Django from '../assets/img/logos/django.png'
import Html5 from '../assets/img/logos/html5.png'


export const ImageProfile = PhotoProfile


export const data = {
    portada: {
        initials: 'Rk',
        title: ['Hello,', 'l am Ricardo,', 'Systems Engineer'],
        keywords: ['Computer Science', 'Deep Learning', 'FrontEnd Developer'],
        contact: 'https://www.linkedin.com/in/rikardocorp/'
    },
    about_me: {
        fullname: 'Ricardo Coronado',
        title: 'M.Sc. in Computer Science',
        address: 'Lima, Peru',
        languages: 'Spanish, English',
        photo: 'https://www.dropbox.com/s/t3vknogssrg1qa2/profile.jpeg',
        socials: [
            {
                icon: 'linkedin',
                url: 'https://www.linkedin.com/in/rikardocorp/'
            },
            {
                icon: 'github',
                url: 'https://github.com/rikardocorp'
            },
            {
                icon: 'youtube',
                url: 'https://www.youtube.com/channel/UCZymp9hXtXiGm4RigjLUScA'
            },
            {
                icon: 'twitter',
                url: 'https://twitter.com/rikardocorp'
            }
            // {
            //     icon: 'graduation-cap',
            //     url: 'http:'
            // },
            // {
            //     icon: 'medium',
            //     url: 'http:'
            // }
        ],
        cv_url: 'https://drive.google.com/open?id=1yjkONgz1v2TjIHe0xaS26jxB4tFEzdk2',
        email: 'rikardo.corp@gmail.com',
        summary: [
            'My Name is Ricardo Coronado. I am a Computer Scientist and a Software Specialist. I have an M.Cs. in Computer Science from Universidad Nacional de San Agustin, Peru. I hold a B.Sc. degree in Systems Engineering (Computer Science Profile) from the Universidad Nacional Jorge Basadre Grohmann, Peru, with congratulations.',
            'I am dedicated, passionate about my career, have the ability to work under pressure and collaborate as a member of a multi-disciplinary team, as well as perform individual tasks for problem solving.',
            'As main activities I have participated in applied research projects, using Machine Learning and Deep learning techniques, I conduct training and give talks on the area of artificial intelligence (AI) and I am an active member of the MeetUp Aqp team, a group responsible for disseminating the area of AI in Arequipa. As a researcher I have published three scientific articles in journals indexed in the area of artificial intelligence, based on pattern recognition and Deep Learning.',
            'I have also performed the function of formulator of projects applied in the area of Computer Science, obtaining funding by the Universidad Nacional Jorge Basadre Grohomann for the project "Computer Vision for the detection and diagnosis of diseases in relevant crops of the Tacna Region", as research assistant. Among other skills, I have experience as Full Stack Developer, with skills as a computer systems analyst, database modeler, Backend developer and Frontend developer.'
        ],
        keywords: [
            'Deep Learning',
            'Computer Vision',
            'Full Stack Developer'
        ]
    },
    education: [
        {
            years: '2016 -- 2018',
            title: 'M.Sc. in Computer Science, with a mention in Information Technology',
            thesis_title: 'Pattern Recognition in Non-Dermatoscopic Images for the Detection of Malignant Skin Diseases, Using Convolutional Neural Networks and Autocoders',
            where: 'Universidad Nacional de San Agustin, Perú',
            advisor: 'Phd. Alexander Ocsa',
            detail: 'Management Agreement FONDECYT'
        },
        {
            years: '2006 -- 2011',
            title: 'B.Sc. degree in Systems Engineering with mention In Computer Science and Systems',
            // thesis_title: 'On semantic solutions for efficient  approximate similarity search on large-scale datasets',
            where: 'Universidad Nacional Jorge Basadre Grohmann, Perú',
            // advisor: 'Cristian Lopez del ALamo',
            detail: 'I graduated in the top 5% of my class'
        }
    ],
    expertise: [
        {
            title: 'Python',
            content: 'Proven skills in image processing, machine learning, pattern recognition and deep learning with Python.',
            url: Python
        },
        {
            title: 'Tensorflow',
            content: 'Proven skills in teaching Machine Learning Fundamentals, Features Extractor, Convolutional Neural Network and Autocoders with Tensorflow.',
            url: Tensorflow
        },
        {
            title: 'Scikit Learn',
            content: 'Proven skills as a developer of mathematical models for solving problems of classification, clustering and prediction with Scikit Learn.',
            url: ScikitLearn
        },
        {
            title: 'React',
            content: 'Expert in the development of WEB and mobile applications, with REACT and REACT-NATIVE technology.',
            url: React
        }, 
        {
            title: 'Django',
            content: 'Experience as a Backend-Services REST developer, with Python - Django - RestFramework.',
            url: Django
        },
        {
            title: 'Html5',
            content: 'Expert in building user interfaces with HTML5, CSS, Sass and Javascript.',
            url: Html5
        }
    ],
    professional_experience: [
        {
            from_to: '02/19–-03/19',
            position: 'Service specialized in Advising and training in Machine Learnig and Deep Learning',
            job_description: 'Training on the basic knowledge of machine learning and the complete process for the development of a prediction model. Training on fundamental principles of mathematical model construction based on convolutive neural networks.',
            where: 'Universidad Nacional Jorge Basadre Grohmann. Tacna, Peru',
            technologies: ['Python', 'Tensorflow', 'Pandas', 'Colaboratory', 'GPU'],
            url: 'http://www.unjbg.edu.pe'
        },
        {
            from_to: '02/18–-12/18',
            position: 'Especialista en TI y Full-stack-developer',
            job_description: 'Development of data management system for volcanic monitoring, system analysis, database construction and web application development. Additionally connection with seismic sensors and monitoring cameras with Python Script.',
            where: 'INGEMMET - Volcanoes Observatory. Arequipa, Peru',
            technologies: ['Python', 'Paramiko', 'Django', 'React', 'Postgresql'],
            url: 'http://ovi.ingemmet.gob.pe/'
        },
        {
            from_to: '11/18–-12/18',
            position: 'Personal Service Specialized in videogame programming',
            job_description: 'Advice on the development and programming of videogames. Participate in coordination meetings at the request of the principal investigator. Prepare a report of activities carried out at the end of the service.',
            where: 'Universidad Nacional de San Agustín. Arequipa, Peru',
            technologies: ['Firebase', 'React', 'UML'],
            url: 'http://www.unsa.edu.pe/'
        },
        {
            from_to: '06/16–-12/18',
            position: 'Cofundador DevAqp Group',
            job_description: 'I have played the role of computer systems analyst, Frontend Developer and Product Manager.',
            where: 'Made-to-measure solutions, Consultancy and Advising. Arequipa, Peru',
            technologies: ['React JS', 'Vue JS', 'Javascript', 'Amazon Server'],
            url: 'http://devaqpgroup.com'
        }
    ],
    // academic_experience: [
    //     {
    //         from_to: '07/17–-03/18',
    //         position: 'Senior Software Engineer',
    //         job_description: 'Laboratoria, Talent that Transforms, Lima, Perú, A non-profit organization where I was blessed to work with. I was a mentor, teacher in thebootcamp program and Senior Developer. I helped to build the talent and e-learningplatform.',
    //         where: 'Lima, Peru',
    //         technologies: [
    //             'React',
    //             'Redux',
    //             'Firebase',
    //             'Firestore',
    //             'NodeJs'
    //         ],
    //         url: 'laboratoria.la'
    //     }
    // ],
    publications: [
        {
            year: 2016,
            selected: true,
            authors: [
                'a',
                'b',
                'c'
            ],
            full_title: 'hello',
            where: 'Chile',
            url: ''
        }
    ]
}