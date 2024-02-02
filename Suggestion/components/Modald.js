"use client";

import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import "primereact/resources/themes/lara-light-indigo/theme.css";


export default function Demo({ visible, setVisible }) {
    // const shouldRenderDemo = typeof visible === 'function' && typeof setVisible === 'function';

    return (
        <div className="card flex justify-content-center">
            <Dialog visible={visible} onHide={() => setVisible(false)}
                style={{ width: '50vw', boxShadow: '' }} breakpoints={{ '960px': '75vw', '641px': '80vw' }}>
                <span className="flex flex-col items-center content-center m-0">
                    <h3 className="text-center text-[#00bcd4]">
                        Coming Soon!
                    </h3>
                        <b>🎉 Get Ready to Be Entertained! 🎥📚🎶🍔</b> 
                    <p className="m-0">
                        Something incredible is on its way to elevate your entertainment experience. 
                        Stay tuned for an epic lineup of movies, books, music, delicious food, and more. We can&#39;t wait to entertain you!

                    </p></span>
            </Dialog>
        </div>
    )
}
