import React from "react";
import "./SponsorBanner.css";
import { useState } from "react";

import talabatLogo from "/talabat.png"; // Add logo to assets

export default function SponsorBanner() {
    
    return (
        <div className="sponsor-banner">
            <img src={talabatLogo} alt="Talabat Logo" className="talabat-logo" />
            <p>🏆 Sponsored by Talabat</p>
            <p>
                Order Food now!
                <a href="https://apps.apple.com/eg/app/talabat-food-grocery-more/id451001072" target="_blank" rel="noreferrer">
                    iOS
                </a> |
                <a href="https://play.google.com/store/apps/details?id=com.talabat&pcampaignid=web_share" target="_blank" rel="noreferrer">
                    Android
                </a>

            </p>
        </div>
    );
}
