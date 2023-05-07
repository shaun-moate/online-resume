'use client'

import Typewriter from "typewriter-effect"

export function Terminal() {
  return (
    <div className="text-base text-bold pb-10 font-mono h-96 w-full border-2 overflow-scroll scroll-smooth">
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('<strong>$ </strong>')
                .pauseFor(2000)
                .typeString('who-am-i')
                .changeDelay(1)
                .typeString('<br/>')
                .typeString('Shaun Moate')
                .typeString('<br/>')
                .typeString('<strong>$ </strong>')
                .changeDelay(150)
                .pauseFor(2000)
                .typeString('pwd')
                .changeDelay(1)
                .typeString('<br/>')
                .typeString('/london/depop/vp-platform-engineering')
                .typeString('<br/>')
                .typeString('<strong>$ </strong>')
                .changeDelay(150)
                .pauseFor(2000)
                .typeString("ls -al ~/experience")
                .changeDelay(1)
                .typeString('<br/>')
                .typeString('total 4269')
                .typeString('<br/>')
                .typeString('-rwx------  shaunmoate  depop  Sept 2023 VP Platform Engineering')
                .typeString('<br/>')
                .typeString('-rwx------  shaunmoate  depop  Jun  2021 Director, Data')
                .typeString('<br/>')
                .typeString('-rwx------  shaunmoate  dazn   Feb  2019 VP Applied ML and Analytics')
                .typeString('<br/>')
                .typeString('-rwx------  shaunmoate  dazn   Feb  2018 Director Data Science')
                .typeString('<br/>')
                .typeString('-rwx------  shaunmoate  dazn   Jul  2017 Head of Insights')
                .typeString('<br/>')
                .typeString('-rwx------  shaunmoate  aviva  Feb  2017 Lead Data Scientist')
                .typeString('<br/>')
                .typeString('-rwx------  shaunmoate  sainsburys  Aug  2016 Data Science Lead')
                .typeString('<br/>')
                .typeString('drwx------  shaunmoate  admin  Jan  2023 <strong>.archive</strong>')
                .typeString('<br/>')
                .typeString('<strong>$ </strong>')
                .changeDelay(150)
                .pauseFor(2000)
                .typeString('clear')
                .pauseFor(500)
                .deleteChars(515)
                .pauseFor(2000)
                .typeString('cat ~/notes/career-focus | head -n 5')
                .changeDelay(1)
                .typeString('<br/>')
                .typeString('driving culture of experimentation')
                .typeString('<br/>')
                .typeString('applying machine learning to user experience')
                .typeString('<br/>')
                .typeString('keeping technology stacks boring')
                .typeString('<br/>')
                .typeString('prioritising user outcomes')
                .typeString('<br/>')
                .typeString('developing future leaders')
                .typeString('<br/>')
                .typeString('<strong>$ </strong>')
                .changeDelay(150)
                .pauseFor(2000)
                .typeString('cat ~/notes/leadership-focus | head -n 5')
                .changeDelay(1)
                .typeString('<br/>')
                .typeString('earning trust')
                .typeString('<br/>')
                .typeString('delivering results')
                .typeString('<br/>')
                .typeString('hiring and developing talent')
                .typeString('<br/>')
                .typeString('thinking big')
                .typeString('<br/>')
                .typeString('are right, a lot')
                .typeString('<br/>')
                .typeString('<strong>$ </strong>')
                .changeDelay(150)
                .pauseFor(2000)
                .typeString('clear')
                .pauseFor(500)
                .deleteChars(335)
                .pauseFor(2000)
                .typeString('cat ~/notes/technical-skills | head -n 5')
                .changeDelay(1)
                .typeString('<br/>')
                .typeString('spark-sql')
                .typeString('<br/>')
                .typeString('pyspark')
                .typeString('<br/>')
                .typeString('typescript')
                .typeString('<br/>')
                .typeString('python')
                .typeString('<br/>')
                .typeString('shell-scripting')
                .typeString('<br/>')
                .typeString('<strong>$ </strong>')
                .changeDelay(150)
                .pauseFor(2000)
                .typeString('cat ~/notes/soft-skills | head -n 3')
                .changeDelay(1)
                .typeString('<br/>')
                .typeString('communication')
                .typeString('<br/>')
                .typeString('consistency')
                .typeString('<br/>')
                .typeString('problem-solving')
                .typeString('<br/>')
                .typeString('<strong>$ </strong>')
                .changeDelay(150)
                .pauseFor(2000)
                .typeString('clear')
                .pauseFor(500)
                .deleteChars(172)
                .pauseFor(2000)
                .typeString('ls -al ~/side-projects')
                .changeDelay(1)
                .typeString('<br/>')
                .typeString('total 69')
                .typeString('<br/>')
                .typeString('-rwx------  shaunmoate  depop  Feb 2023 online-resume')
                .typeString('<br/>')
                .typeString('-rwx------  shaunmoate  depop  Jun  2021 nova-lang')
                .typeString('<br/>')
                .typeString('-rwx------  shaunmoate  dazn   May  2023 bootstrap-scripts')
                .typeString('<br/>')
                .typeString('drwx------  shaunmoate  admin  Mar  2023 <strong>.archive</strong>')
                .typeString('<br/>')
                .typeString('<strong>$ </strong>')
                .changeDelay(150)
                .pauseFor(60000)
                .start();
        }}
        options={{
          delay: 150,
          deleteSpeed: 1,
          loop: true,
        }}
      />
    </div>
  );
}


