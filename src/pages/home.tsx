import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';

//pages
import Header from './header';
import About from './about';
import Projects from './projects';
import Contact from './contact';

export default function Home() {
    return (
        <ScrollView className='h-full bg-[#101B35] px-10 py-7 mt-10 mb-5' >
            <StatusBar style="auto" />
            <Header />
            <About />
            <Projects />
            <Contact />
        </ScrollView>
    );
}
