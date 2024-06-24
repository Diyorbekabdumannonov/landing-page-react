import React from 'react'

export default function Hero() {
    return (
        <section class="flex bg-gray450 pt-14 lg:pl-14 py-6 cont flex-col lg:flex-row items-center">
            <div class="flex-1 lg:py-24 sm:py-16 py-8 flex flex-col items-start">
                <h1 class="title !mt-0">
                    See how we can help you reach your goals
                </h1>
                <p class="sm:mt-10 mt-4 sm:text-18 text-sm tracking-normal text-gray-700 font-medium max-w-96 text-center lg:text-left mx-auto lg:mx-0">
                    Answer two questions to help us match our expertise and software solutions to your sector.
                </p>
                <h3 class="mt-8 font-bold text-gray750">What is your industry?</h3>
                <div class="flex mt-8 items-center gap-4">
                    <div class="dot dot-active"></div>
                    <div class="dot"></div>
                </div>
                <div class="mt-8 flex items-center flex-wrap gap-y-6 gap-x-4 btn-container">
                    <button class="btn-primary">Frontend</button>
                    <button class="btn-primary">Backend</button>
                </div>
            </div>
            <div class="flex-1 hidden lg:flex items-center justify-center">
                <pre class="">
                    <code class="javascript">
                        Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Itaque reprehenderit
                        vero sint explicabo eligendi, porro ratione
                        excepturi magnam ad, veritatis quaerat officiis
                        nisi quam iusto quibusdam. Exercitationem
                        perferendis maiores reiciendis iure.
                        Numquam eligendi quidem laudantium. Incidunt
                        obcaecati perspiciatis assumenda illum nobis
                        sit animi aut ad veniam fugiat, eos laborum ullam.
                        obcaecati perspiciatis assumenda illum nobis
                        sit animi aut ad veniam fugiat, eos laborum ullam.</code>
                    <code class="javascript !hidden">{`
    import { JsonObject } from '@angular-devkit/core';
  
    interface Options extends JsonObject {
      source: string;
      destination: string;
    }
    
    export default createBuilder(copyFileBuilder);
    
    async function copyFileBuilder(
      options: Options,
      context: BuilderContext,
    ): Promise<BuilderOutput> {}</code>`}</code>
                    <code class="javascript !hidden">
                        {`<?php
    // create an object
    $Lightning = new Car();
    
    // show object properties
    echo $Lightning->model;
    // prints: mysql link
    $c = mysql_connect();
    echo get_resource_type($c) . "\n";
    
    // prints: stream
    $fp = fopen("foo", "w");
    echo get_resource_type($fp) . "\n";
    
    // prints: domxml document
    $doc = new_xmldoc("1.0");
    echo get_resource_type($doc->doc) . "\n";
    ?>`}</code>
                </pre>
            </div>
        </section>
    )
}