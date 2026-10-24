"use client";

import React from "react";

interface RoyalCrestProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export default function RoyalCrest({ className = "", size = 120, animated = false }: RoyalCrestProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-label="G.D. Caterers Royal Crest Monogram"
    >
      <svg
        viewBox="0 0 500 500"
        width={size}
        height={size}
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id={`royalCrimson-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C41E2A" />
            <stop offset="45%" stopColor="#9E1520" />
            <stop offset="100%" stopColor="#6E0B13" />
          </linearGradient>

          <linearGradient id={`antiqueGold-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE6A3" />
            <stop offset="30%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#AA771C" />
            <stop offset="100%" stopColor="#F5D061" />
          </linearGradient>
        </defs>

        <g className={animated ? "transition-transform duration-700 hover:scale-105" : ""}>
          {/* Crown */}
          <g className={animated ? "transition-all duration-1000 ease-out transform" : ""}>
            <path
              d="M 205 138 Q 250 148 295 138 L 291 146 Q 250 154 209 146 Z"
              fill={`url(#royalCrimson-${size})`}
            />
            <circle cx="218" cy="143" r="2.5" fill="#FAF5E8" />
            <circle cx="234" cy="145" r="2.5" fill="#FAF5E8" />
            <circle cx="250" cy="146" r="3.2" fill="#FFE6A3" />
            <circle cx="266" cy="145" r="2.5" fill="#FAF5E8" />
            <circle cx="282" cy="143" r="2.5" fill="#FAF5E8" />

            {/* Crown Peaks */}
            <path d="M 246 142 L 250 102 L 254 142 Z" fill={`url(#royalCrimson-${size})`} />
            <circle cx="250" cy="99" r="6.5" fill={`url(#royalCrimson-${size})`} />
            <circle cx="250" cy="99" r="3" fill="#FFE6A3" />
            
            <path d="M 226 140 L 222 112 L 235 135 Z" fill={`url(#royalCrimson-${size})`} />
            <circle cx="220" cy="109" r="4.5" fill={`url(#royalCrimson-${size})`} />

            <path d="M 274 140 L 278 112 L 265 135 Z" fill={`url(#royalCrimson-${size})`} />
            <circle cx="280" cy="109" r="4.5" fill={`url(#royalCrimson-${size})`} />

            <path d="M 207 138 C 195 128 202 118 206 122 C 204 128 211 134 213 139 Z" fill={`url(#royalCrimson-${size})`} />
            <circle cx="204" cy="120" r="4" fill={`url(#royalCrimson-${size})`} />

            <path d="M 293 138 C 305 128 298 118 294 122 C 296 128 289 134 287 139 Z" fill={`url(#royalCrimson-${size})`} />
            <circle cx="296" cy="120" r="4" fill={`url(#royalCrimson-${size})`} />
          </g>

          {/* Medallion Outer Rings */}
          <circle
            cx="250"
            cy="265"
            r="95"
            fill="none"
            stroke={`url(#royalCrimson-${size})`}
            strokeWidth="5"
            className={animated ? "preloader-path" : ""}
          />
          <circle
            cx="250"
            cy="265"
            r="86"
            fill="none"
            stroke={`url(#royalCrimson-${size})`}
            strokeWidth="2.5"
            strokeDasharray="3, 5"
          />
          <circle
            cx="250"
            cy="265"
            r="77"
            fill="#FDF8EC"
            stroke={`url(#royalCrimson-${size})`}
            strokeWidth="2.5"
          />

          {/* Monogram G.D. */}
          <text
            x="250"
            y="287"
            fontFamily="'Cormorant Garamond', 'Playfair Display', Georgia, serif"
            fontSize="64"
            fontWeight="700"
            fontStyle="italic"
            letterSpacing="1.5"
            textAnchor="middle"
            fill={`url(#royalCrimson-${size})`}
            className="select-none"
          >
            G.D.
          </text>

          {/* Left Laurel */}
          <g fill={`url(#royalCrimson-${size})`}>
            <path d="M 195 178 C 182 170 178 185 188 190 C 196 186 196 180 195 178 Z" />
            <path d="M 183 162 C 170 158 168 174 179 177 C 185 172 185 165 183 162 Z" />
            <path d="M 166 195 C 150 190 148 206 160 210 C 168 204 168 198 166 195 Z" />
            <path d="M 174 212 C 160 210 156 226 169 228 C 176 221 176 215 174 212 Z" />
            <path d="M 152 232 C 136 230 135 247 149 248 C 156 241 155 234 152 232 Z" />
            <path d="M 160 252 C 145 254 148 271 161 269 C 166 261 164 254 160 252 Z" />
            <path d="M 150 274 C 136 279 142 296 155 292 C 159 284 156 277 150 274 Z" />
            <path d="M 164 294 C 152 302 161 317 172 310 C 174 301 170 295 164 294 Z" />
            <path d="M 168 316 C 158 327 170 339 180 330 C 180 321 175 317 168 316 Z" />
            <path d="M 185 334 C 178 347 194 354 201 343 C 199 334 193 332 185 334 Z" />
            <path
              d="M 204 166 C 170 195 145 250 162 315 C 172 338 190 355 208 362"
              fill="none"
              stroke={`url(#royalCrimson-${size})`}
              strokeWidth="4"
              strokeLinecap="round"
              className={animated ? "preloader-path" : ""}
            />
          </g>

          {/* Right Laurel */}
          <g fill={`url(#royalCrimson-${size})`}>
            <path d="M 305 178 C 318 170 322 185 312 190 C 304 186 304 180 305 178 Z" />
            <path d="M 317 162 C 330 158 332 174 321 177 C 315 172 315 165 317 162 Z" />
            <path d="M 334 195 C 350 190 352 206 340 210 C 332 204 332 198 334 195 Z" />
            <path d="M 326 212 C 340 210 344 226 331 228 C 324 221 324 215 326 212 Z" />
            <path d="M 348 232 C 364 230 365 247 351 248 C 344 241 345 234 348 232 Z" />
            <path d="M 340 252 C 355 254 352 271 339 269 C 334 261 336 254 340 252 Z" />
            <path d="M 350 274 C 364 279 358 296 345 292 C 341 284 344 277 350 274 Z" />
            <path d="M 336 294 C 348 302 339 317 328 310 C 326 301 330 295 336 294 Z" />
            <path d="M 332 316 C 342 327 330 339 320 330 C 320 321 325 317 332 316 Z" />
            <path d="M 315 334 C 322 347 306 354 299 343 C 301 334 307 332 315 334 Z" />
            <path
              d="M 296 166 C 330 195 355 250 338 315 C 328 338 310 355 292 362"
              fill="none"
              stroke={`url(#royalCrimson-${size})`}
              strokeWidth="4"
              strokeLinecap="round"
              className={animated ? "preloader-path" : ""}
            />
          </g>

          {/* Bottom Flourish */}
          <g fill={`url(#royalCrimson-${size})`}>
            <path d="M 250 366 C 244 380 240 405 250 422 C 260 405 256 380 250 366 Z" />
            <circle cx="250" cy="426" r="3.5" />
            <path d="M 248 375 C 235 385 210 395 190 380 C 172 366 182 345 200 350 C 215 354 212 372 198 370 C 190 368 188 360 194 356 C 200 354 204 362 196 365 C 205 375 224 372 238 366 Z" />
            <path d="M 252 375 C 265 385 290 395 310 380 C 328 366 318 345 300 350 C 285 354 288 372 302 370 C 310 368 312 360 306 356 C 300 354 296 362 304 365 C 295 375 276 372 262 366 Z" />
            <path d="M 220 376 C 185 390 160 415 185 425 C 208 432 230 405 245 386 Z" />
            <path d="M 280 376 C 315 390 340 415 315 425 C 292 432 270 405 255 386 Z" />
            
            {/* Gold Accents */}
            <circle cx="250" cy="378" r="4" fill={`url(#antiqueGold-${size})`} />
            <circle cx="236" cy="382" r="3" fill={`url(#antiqueGold-${size})`} />
            <circle cx="264" cy="382" r="3" fill={`url(#antiqueGold-${size})`} />
          </g>
        </g>
      </svg>
    </div>
  );
}
